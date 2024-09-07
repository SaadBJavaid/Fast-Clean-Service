import type { NextApiRequest, NextApiResponse } from "next";
import bookingService from "../../../../services/booking";
import { IBooking } from "../../../../models/Booking";
import dbConnect from "../../../../lib/dbConnect";

type ResponseData = {
  success: boolean;
  data?: IBooking | {};
  message?: string;
};

export async function GET(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  await dbConnect();

  const { id } = req.query;

  if (typeof id !== "string") {
    return res.status(400).json({ success: false, message: "Invalid ID" });
  }

  try {
    const booking = await bookingService.getBooking(id);
    if (!booking) {
      return res.status(404).json({ success: false, message: "Booking not found" });
    }
    res.status(200).json({ success: true, data: booking });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

export async function PUT(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  await dbConnect();

  const { id } = req.query;

  if (typeof id !== "string") {
    return res.status(400).json({ success: false, message: "Invalid ID" });
  }

  try {
    const booking = await bookingService.updateBooking(id, req.body);
    if (!booking) {
      return res.status(404).json({ success: false, message: "Booking not found" });
    }
    res.status(200).json({ success: true, data: booking });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

export async function DELETE(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  await dbConnect();

  const { id } = req.query;

  if (typeof id !== "string") {
    return res.status(400).json({ success: false, message: "Invalid ID" });
  }

  try {
    const deletedBooking = await bookingService.deleteBooking(id);
    if (!deletedBooking) {
      return res.status(404).json({ success: false, message: "Booking not found" });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}
