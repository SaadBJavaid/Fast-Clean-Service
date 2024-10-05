import {NextApiResponse} from "next";
import dbConnect from "../../../../../lib/dbConnect";
import AppointmentService from "../../../../../services/appointments";
import {NextRequest, NextResponse} from "next/server";

export async function GET(req: NextRequest, res: NextApiResponse) {
  await dbConnect();

  try {
    const data = req.nextUrl.searchParams;

    const date = new Date(data.get("date"));
    const type: string = data.get("type");
    if (type !== "Onsite" && type !== "Remote") {
      console.error("type", type);
      throw new Error("Invalid type");
    }

    const offset: string = data.get("offset");
    if (isNaN(parseInt(offset))) {
      console.error("offset", offset);
      throw new Error("Invalid offset");
    }

    const availableTimeSlots = await AppointmentService.generateWeeksAvailableTimeSlots(date, type, parseInt(offset));

    return NextResponse.json({ success: true, availableTimeSlots, length: availableTimeSlots.length });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
