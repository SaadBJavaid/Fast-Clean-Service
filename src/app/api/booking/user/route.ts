import type { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import {IBooking} from "../../../../models/Booking";
import dbConnect from "../../../../lib/dbConnect";
import bookingService from "../../../../services/booking";

type ResponseData = {
    success: boolean;
    data?: IBooking | IBooking[];
    message?: string;
};

export async function GET(
    req: NextRequest,
    res: NextApiResponse<ResponseData>
) {
    await dbConnect();

    try {
        const userEmail = req.nextUrl.searchParams.get("userEmail");

        if (!userEmail) {
            return NextResponse.json({ success: false, message: "User email is required" });
        }
        const bookings = await bookingService.getAllBookingsByUserId(userEmail);
        return NextResponse.json({ success: true, data: bookings });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message });
    }
}