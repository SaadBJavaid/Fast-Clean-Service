import { NextApiResponse } from "next";
import dbConnect from "../../../../lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import bookingService from "../../../../services/booking";

export async function POST(req: NextRequest, res: NextApiResponse) {
  await dbConnect();

  try {
    const data = await req.json();
    const id = data.id;
    const userId = data.userId;
    const dateTime = new Date(data.dateTime);

    const booking = await bookingService.rescheduleBooking(id, dateTime, userId);

    return NextResponse.json({ success: true, booking });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
