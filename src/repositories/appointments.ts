// repositories/appointmentRepository.ts

import { Car } from "../models/Car";
import { Timeslot } from "../models/Timeslot";

class AppointmentRepository {
  static async setNumCars(numCars: number): Promise<void> {
    await Car.findOneAndUpdate({}, { numCars }, { upsert: true });
  }

  static async getNumCars(): Promise<number> {
    const car = await Car.findOne();
    return car ? car.numCars : 0;
  }

  static async setAvailableTimeslots(date: string, slots: string[]): Promise<void> {
    await Timeslot.findOneAndUpdate({ date: new Date(date) }, { slots }, { upsert: true });
  }

  static async getAvailableTimeslots(date: string): Promise<string[]> {
    const timeslot = await Timeslot.findOne({ date: new Date(date) });
    return timeslot ? timeslot.slots : [];
  }
}

export default AppointmentRepository;
