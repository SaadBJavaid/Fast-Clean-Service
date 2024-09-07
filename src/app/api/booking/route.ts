import type { NextApiRequest, NextApiResponse } from "next";
import bookingService from "../../../services/booking";
import { IBooking } from "../../../models/Booking";
import dbConnect from "../../../lib/dbConnect";

type ResponseData = {
  success: boolean;
  data?: IBooking | IBooking[];
  message?: string;
};

export async function GET(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  await dbConnect();

  try {
    const bookings = await bookingService.getAllBookings();
    res.status(200).json({ success: true, data: bookings });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

export async function POST(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  await dbConnect();

  try {
    const booking = await bookingService.createBooking(req.body);
    res.status(201).json({ success: true, data: booking });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}
