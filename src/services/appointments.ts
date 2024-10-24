import Booking from "../models/Booking";
import CarAvailability from "../models/Car";
import AppointmentRepository from "../repositories/appointments";

class AppointmentService {
  // Service Layer to get available cars
  async getAvailableCarsOnDate(date) {
    const targetDate = new Date(date);
    targetDate.setHours(0, 0, 0, 0); // Normalize to start of day

    let entry = await CarAvailability.findOne({ date: targetDate });

    if (entry) {
      return entry.availableCars;
    } else {
      // Find the most recent entry before the target date
      const previousEntry = await CarAvailability.findOne({
        date: { $lt: targetDate },
      }).sort({ date: -1 });

      return previousEntry ? previousEntry.availableCars : 0;
    }
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

  // Updated to generate available time slots
  async generateAvailableTimeSlots(date, type: "Onsite" | "Remote") {
    const targetDate = new Date(date);
    targetDate.setUTCHours(0, 0, 0, 0); // Normalize to start of day

    const totalAvailableCars = await this.getAvailableCarsOnDate(targetDate);
    const timeSlots = [];

    for (let hour = 9; hour < 18; hour += type === "Onsite" ? 1 : 2) {
      const bookingsForThisHour = await this.getBookingsForHour(targetDate, hour, type);
      let availableCarsForThisHour = 0;

      // set available cars for this hour
      // if the type is Onsite, set available cars to 0 if there are less than 2 bookings
      // otherwise, set available cars to total available cars minus bookings
      if (type === "Onsite") {
        availableCarsForThisHour = bookingsForThisHour >= 2 ? 0 : 2;
      } else {
        availableCarsForThisHour = totalAvailableCars - bookingsForThisHour;
      }

      // console.log("aaaaaaa", availableCarsForThisHour);

      if (availableCarsForThisHour > 0) {
        const startTime = new Date(targetDate);
        startTime.setHours(hour, 0, 0, 0);

        const endTime = new Date(targetDate);
        endTime.setHours(hour + 1, 0, 0, 0);

        const slot = {
          id: `event-${date}-${hour}`,
          label: startTime.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }),
          groupLabel: "",
          user: "",
          color: "#333",
          startHour: `${startTime.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false })} ${startTime
            .toLocaleTimeString("en-US", { hour12: true })
            .slice(-2)}`,
          endHour: `${endTime.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false })} ${endTime
            .toLocaleTimeString("en-US", { hour12: true })
            .slice(-2)}`,

          date: targetDate.toISOString().split("T")[0],
          createdAt: new Date(),
          createdBy: "Fast Clean Service",
          availableCars: availableCarsForThisHour,
        };

        timeSlots.push(slot);
      }
    }

    return timeSlots;
  }

  async generateWeeksAvailableTimeSlots(date: Date, type: "Onsite" | "Remote", offset: number = 0) {
    const targetDate = new Date(date);
    targetDate.setUTCHours(0, 0, 0, 0);
    targetDate.setDate(targetDate.getDate() + 8 * offset);

    let timeslots = [];
    for (let i = 0; i <= 7; i++) {
      const nextDate = new Date(targetDate);
      nextDate.setDate(targetDate.getDate() + i);

      const availableTimeSlots = await this.generateAvailableTimeSlots(nextDate, type);

      timeslots = [...timeslots, ...availableTimeSlots];
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
