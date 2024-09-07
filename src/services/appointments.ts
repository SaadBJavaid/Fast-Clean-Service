// services/appointmentService.ts

import AppointmentRepository from "../repositories/appointments";

class AppointmentService {
  static async setNumCars(numCars: number): Promise<void> {
    await AppointmentRepository.setNumCars(numCars);
  }

  static async getNumCars(): Promise<number> {
    return await AppointmentRepository.getNumCars();
  }

  static async setAvailableTimeslots(date: string, slots: string[]): Promise<void> {
    const numCars = await this.getNumCars();
    const maxSlots = numCars * 2;

    if (slots.length > maxSlots) {
      throw new Error(`Maximum ${maxSlots} slots allowed for ${numCars} cars`);
    }

    await AppointmentRepository.setAvailableTimeslots(date, slots);
  }

  static async getAvailableTimeslots(date: string): Promise<string[]> {
    return await AppointmentRepository.getAvailableTimeslots(date);
  }
}

export default AppointmentService;
