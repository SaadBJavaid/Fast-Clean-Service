import type {NextApiResponse} from "next";
import bookingService from "../../../services/booking";
import {IBooking} from "../../../models/Booking";
import dbConnect from "../../../lib/dbConnect";
import {NextRequest, NextResponse} from "next/server";

type ResponseData = {
  success: boolean;
  data?: IBooking | IBooking[];
  message?: string;
};

export async function GET(req: NextRequest, res: NextApiResponse<ResponseData>) {
  await dbConnect();

  try {
    const bookings = await bookingService.getAllBookings();
    return NextResponse.json({ success: true, data: bookings });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}

export async function POST(req: NextRequest, res: NextApiResponse<ResponseData>) {
  await dbConnect();

  try {
    const booking = await bookingService.createBooking(await req.json());
    return NextResponse.json({ success: true, data: booking });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
