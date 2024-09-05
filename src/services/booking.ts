// services/bookingService.ts
import bookingRepository from "../repositories/booking";
import { IBooking } from "../models/Booking";

class BookingService {
  async createBooking(bookingData: Partial<IBooking>): Promise<IBooking> {
    return await bookingRepository.create(bookingData);
  }

  async getBooking(id: string): Promise<IBooking | null> {
    return await bookingRepository.findById(id);
  }

  async getAllBookings(): Promise<IBooking[]> {
    return await bookingRepository.findAll();
  }

  async updateBooking(id: string, bookingData: Partial<IBooking>): Promise<IBooking | null> {
    return await bookingRepository.update(id, bookingData);
  }

  async deleteBooking(id: string): Promise<IBooking | null> {
    return await bookingRepository.delete(id);
  }
}

export default new BookingService();
