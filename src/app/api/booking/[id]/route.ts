import type { NextApiResponse } from "next";
import bookingService from "../../../../services/booking";
import { IBooking } from "../../../../models/Booking";
import dbConnect from "../../../../lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";

type ResponseData = {
  success: boolean;
  data?: IBooking | {};
  message?: string;
};

export async function GET(req: NextRequest, res: NextApiResponse<ResponseData>) {
  await dbConnect();

  const data = req.nextUrl.searchParams;
  const id = data.get("id");

  if (typeof id !== "string") {
    return NextResponse.json({ success: false, message: "Invalid ID" });
  }

  try {
    const booking = await bookingService.getBooking(id);
    if (!booking) {
      return NextResponse.json({ success: false, message: "Booking not found" });
    }
    return NextResponse.json({ success: true, data: booking });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}

export async function PUT(req: NextRequest, res: NextApiResponse<ResponseData>) {
  await dbConnect();

  const data = req.nextUrl.searchParams;
  const id = data.get("id");

  if (typeof id !== "string") {
    return NextResponse.json({ success: false, message: "Invalid ID" });
  }

  try {
    const booking = await bookingService.updateBooking(id, await req.json());
    if (!booking) {
      return NextResponse.json({ success: false, message: "Booking not found" });
    }
    return NextResponse.json({ success: true, data: booking });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}

export async function DELETE(req: NextRequest, res: NextApiResponse<ResponseData>) {
  await dbConnect();

  const data = req.nextUrl.searchParams;
  const id = data.get("id");
  
  if (typeof id !== "string") {
    return NextResponse.json({ success: false, message: "Invalid ID" });
  }

  try {
    const deletedBooking = await bookingService.deleteBooking(id);
    if (!deletedBooking) {
      return NextResponse.json({ success: false, message: "Booking not found" });
    }
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
