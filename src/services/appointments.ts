import Booking from "../models/Booking";
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
  async getMemoizedAvailableCarsForDate(searchDate: Date, sortedEntries: ICarAvailability[]) {
    // If target date is before first entry, return null or default value
    if (searchDate < new Date(sortedEntries[0].date)) {
      return null;
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

  // Updated to generate available time slots
  async generateRemoteAvailableTimeSlots(date: Date, sortedCarsAvailable: ICarAvailability[]) {
    const availableCars = await this.getMemoizedAvailableCarsForDate(date, sortedCarsAvailable);
    const timeslots = [];

    // Start of the day (first time for that date)
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    // End of the day (last time for that date)
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    // get the bookings for the entire day
    const bookingsForDate = await Booking.find({
      lockTime: {
        start: { $gte: startOfDay },
        end: { $lte: endOfDay },
      },
    });

    console.log("bbbbbbbbbbb", startOfDay, endOfDay, bookingsForDate);

    return timeslots;
  }

  async generateWeeksAvailableTimeSlots(date: Date, type: "Onsite" | "Remote", offset: number = 0) {
    const startDate = new Date(date);
    startDate.setUTCHours(0, 0, 0, 0);
    startDate.setDate(startDate.getDate() + 8 * offset);

    const endDate = new Date(date);
    endDate.setUTCHours(0, 0, 0, 0);
    endDate.setDate(endDate.getDate() + 8 * (offset + 1));

    // * Memoized Available cars
    const availableCars = await this.getAvailableCarsBetween(startDate, endDate);
    console.log("aaaaaaaaaaaaa", availableCars);

    const availableTimeSlots = await this.generateRemoteAvailableTimeSlots(startDate, availableCars);

    // for (let i = 0; i < availableCars.length; i++) {
    //   const availableTimeSlots = await this.generateAvailableTimeSlots(availableCars[i].date, type);
    //   availableCars[i].timeslots = availableTimeSlots;
    // }

    let timeslots = [];
    // for (let i = 0; i <= 7; i++) {
    //   const nextDate = new Date(targetDate);
    //   nextDate.setDate(targetDate.getDate() + i);

    //   const availableTimeSlots = await this.generateAvailableTimeSlots(nextDate, type);

    //   timeslots = [...timeslots, ...availableTimeSlots];
    // }

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
