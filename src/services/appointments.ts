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
  async getBookingsForHour(date, hour) {
    const startOfHour = new Date(date);
    startOfHour.setHours(hour, 0, 0, 0);

    const endOfHour = new Date(date);
    endOfHour.setHours(hour + 1, 0, 0, 0);

    return await Booking.countDocuments({
      appointmentTimestamp: { $gte: startOfHour, $lt: endOfHour },
    });
  }

  // Updated to generate available time slots
  async generateAvailableTimeSlots(date) {
    const targetDate = new Date(date);
    targetDate.setUTCHours(0, 0, 0, 0); // Normalize to start of day

    const totalAvailableCars = await this.getAvailableCarsOnDate(targetDate);
    const timeSlots = [];

    for (let hour = 9; hour < 18; hour += 2) {
      const bookingsForThisHour = await this.getBookingsForHour(targetDate, hour);
      const availableCarsForThisHour = totalAvailableCars - bookingsForThisHour;

      if (availableCarsForThisHour > 0) {
        const startTime = new Date(targetDate);
        startTime.setHours(hour, 0, 0, 0);

        const endTime = new Date(targetDate);
        endTime.setHours(hour + 1, 0, 0, 0);

        const slot = {
          id: `event-${hour}`,
          label: startTime.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }),
          groupLabel: "",
          user: "",
          color: "#333",
          startHour: startTime.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }),
          endHour: endTime.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }),
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

export default new AppointmentService();
