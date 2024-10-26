import Booking, { IBooking } from "../models/Booking";
import CarAvailability, { ICarAvailability } from "../models/Car";
import AppointmentRepository from "../repositories/appointments";

class AppointmentService {
  // Service Layer to get available cars
  async getAvailableCarsBetween(startDate: Date, endDate: Date) {
    const availableCars = await CarAvailability.aggregate([
      {
        $facet: {
          // Get the latest record before startDate
          latestBefore: [
            {
              $match: {
                date: { $lt: startDate },
              },
            },
            {
              $sort: { date: -1 },
            },
            {
              $limit: 1,
            },
          ],
          // Get records between startDate and endDate
          betweenDates: [
            {
              $match: {
                date: {
                  $gte: startDate,
                  $lte: endDate,
                },
              },
            },
            {
              $sort: { date: -1 },
            },
          ],
        },
      },
      // Combine both results
      {
        $project: {
          allRecords: {
            $concatArrays: ["$latestBefore", "$betweenDates"],
          },
        },
      },
      {
        $unwind: "$allRecords",
      },
      {
        $replaceRoot: { newRoot: "$allRecords" },
      },
      {
        $sort: { date: 1 },
      },
    ]);
    return availableCars;
  }

  // Updated to get bookings for a specific hour
  async getBookingsForHour(date, hour, type) {
    const startOfHour = new Date(date);
    startOfHour.setHours(hour, 0, 0, 0);

    const endOfHour = new Date(date);
    endOfHour.setHours(hour + 1, 0, 0, 0);

    return await Booking.countDocuments({
      appointmentTimestamp: { $gte: startOfHour, $lt: endOfHour },
      type: type,
    });
  }
  async getMemoizedAvailableCarsForDate(tgDate: Date, sortedEntries: ICarAvailability[]) {
    // If target date is before first entry, return null or default value
    const searchDate = new Date(tgDate);

    if (sortedEntries.length === 1) {
      return sortedEntries[0].availableCars;
    }

    // Find the last entry that is less than or equal to the target date
    let result = sortedEntries[0];

    for (const entry of sortedEntries) {
      if (new Date(entry.date) <= searchDate) {
        result = entry;
      } else {
        return result.availableCars;
      }
    }
  }

  async countOverlappingTimeslots(bookings, TIMESLOT_INTERVAL = 30) {
    // Create time slots from 9 AM to 5 PM in 30-minute intervals
    const timeSlots = [];
    const workStart = 9; // 9 AM
    const workEnd = 17; // 5 PM

    // Generate all possible time slots
    for (let hour = workStart; hour < workEnd; hour++) {
      for (let minutes = 0; minutes < 60; minutes += TIMESLOT_INTERVAL) {
        const timeString = `${hour.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
        timeSlots.push({
          time: timeString,
          count: 0,
        });
      }
    }

    // For each booking, increment count for all overlapping slots
    bookings.forEach((booking: IBooking) => {
      const startTime = new Date(booking.lockTime.start);
      const endTime = new Date(booking.lockTime.end);

      timeSlots.forEach((slot) => {
        // Create Date objects for the slot's start and end times
        const [slotHour, slotMinute] = slot.time.split(":").map(Number);

        const slotStartTime = new Date(startTime);
        slotStartTime.setHours(slotHour, slotMinute, 0);

        const slotEndTime = new Date(slotStartTime);
        slotEndTime.setMinutes(slotStartTime.getMinutes() + TIMESLOT_INTERVAL);

        // Check if this booking overlaps with the current slot
        if (startTime < slotEndTime && endTime > slotStartTime) {
          slot.count++;
        }
      });
    });

    return timeSlots;
  }

  // Updated to generate available time slots
  async generateRemoteAvailableTimeSlots(
    date: Date,
    sortedCarsAvailable: ICarAvailability[],
    transitTime: number,
    serviceTime: number
  ) {
    const TIMESLOT_INTERVAL = 30;

    const availableCars = await this.getMemoizedAvailableCarsForDate(date, sortedCarsAvailable);
    const timeslots = [];
    console.log("availableCars", availableCars);

    // Start of the day (first time for that date)
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    // End of the day (last time for that date)
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    // get the bookings for the entire day
    // If you need to include bookings that partially overlap with today
    const bookingsOverlapping = await Booking.find({
      $and: [{ "lockTime.start": { $lte: endOfDay } }, { "lockTime.end": { $gte: startOfDay } }],
    });

    // This will calculate all the timeslots which have a booking overlapping with it for 30min intervals
    const slotsOverlapCount = await this.countOverlappingTimeslots(bookingsOverlapping, TIMESLOT_INTERVAL);

    // Window size is the number of timeslots required for the duration
    const windowSize = Math.ceil((2 * transitTime + serviceTime) / TIMESLOT_INTERVAL);
    // initTime is the number of timeslots required for the transit time
    const initTime = Math.floor(transitTime / TIMESLOT_INTERVAL);
    // Looping over it
    for (let i = initTime; i < slotsOverlapCount.length - initTime; i++) {
      // If the count of the timeslot is 0, then it is available
      const window = slotsOverlapCount.slice(i - initTime, i + windowSize - initTime);

      const maxCount = Math.max(...window.map((slot) => slot.count));
      if (maxCount < availableCars) {
        timeslots.push({
          start: window[0].time,
          end: window[window.length - 1].time,
        });
      }
    }

    return timeslots;
  }

  async generateWeeksAvailableTimeSlots(
    date: Date,
    type: "Onsite" | "Remote",
    transitTime: number,
    serviceTime: number,
    offset: number = 0
  ) {
    const startDate = new Date(date);
    startDate.setUTCHours(0, 0, 0, 0);
    startDate.setDate(startDate.getDate() + 7 * offset);

    const endDate = new Date(date);
    endDate.setUTCHours(0, 0, 0, 0);
    endDate.setDate(endDate.getDate() + 8 * (offset + 1));

    // * Memoized Available cars
    const availableCars = await this.getAvailableCarsBetween(startDate, endDate);

    const timeslots = [];
    const currentDate = new Date(startDate);

    while (currentDate < endDate) {
      // Get available slots for current day
      const dailySlots = await this.generateRemoteAvailableTimeSlots(
        currentDate,
        availableCars,
        transitTime,
        serviceTime
      );
  
      // Format the date for the output
      const formattedDate = currentDate.toISOString();
  
      // Add the day's slots to the result array
      timeslots.push({
        time: formattedDate,
        slots: dailySlots
      });
  
      // Move to next day
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return timeslots;
  }

  async setNumCars(date: Date, numCars: number): Promise<void> {
    await AppointmentRepository.updateCarAvailability(date, numCars);
  }

  async getNumCars(date: Date): Promise<number> {
    return await AppointmentRepository.getAvailableCarsForDate(date);
  }

  async setAvailableTimeslots(date: string, slots: string[]): Promise<void> {
    const numCars = await this.getNumCars(new Date(date));
    const maxSlots = numCars * 2;

    if (slots.length > maxSlots) {
      throw new Error(`Maximum ${maxSlots} slots allowed for ${numCars} cars`);
    }

    await AppointmentRepository.setAvailableTimeslots(date, slots);
  }

  async getAvailableTimeslots(date: string): Promise<string[]> {
    return await AppointmentRepository.getAvailableTimeslots(date);
  }
}

const appointmentService = new AppointmentService();
export default appointmentService;
