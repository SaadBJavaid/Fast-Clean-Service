import Booking, { IBooking } from "../models/Booking";

class BookingRepository {
  async create(bookingData: Partial<IBooking>): Promise<IBooking> {
    const booking = new Booking(bookingData);
    return await booking.save();
  }

  async findById(id: string): Promise<IBooking | null> {
    return Booking.findById(id);
  }

  async findAll(): Promise<IBooking[]> {
    return Booking.find();
  }

  async findByUserId(userId: string) {
    return await Booking.find({ userId });
  }

  async update(
    id: string,
    bookingData: Partial<IBooking>
  ): Promise<IBooking | null> {
    return Booking.findByIdAndUpdate(id, bookingData, { new: true });
  }

  async delete(id: string): Promise<IBooking | null> {
    return Booking.findByIdAndDelete(id);
  }
}

export default new BookingRepository();
