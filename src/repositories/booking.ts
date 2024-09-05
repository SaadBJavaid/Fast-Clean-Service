import Booking, { IBooking } from "../models/Booking";

class BookingRepository {
  async create(bookingData: Partial<IBooking>): Promise<IBooking> {
    const booking = new Booking(bookingData);
    return await booking.save();
  }

  async findById(id: string): Promise<IBooking | null> {
    return await Booking.findById(id);
  }

  async findAll(): Promise<IBooking[]> {
    return await Booking.find();
  }

  async update(id: string, bookingData: Partial<IBooking>): Promise<IBooking | null> {
    return await Booking.findByIdAndUpdate(id, bookingData, { new: true });
  }

  async delete(id: string): Promise<IBooking | null> {
    return await Booking.findByIdAndDelete(id);
  }
}

export default new BookingRepository();
