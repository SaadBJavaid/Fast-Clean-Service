import {NextApiResponse} from "next";
import dbConnect from "../../../../lib/dbConnect";
import AppointmentService from "../../../../services/appointments";
import {NextRequest, NextResponse} from "next/server";

export async function GET(req: NextRequest, res: NextApiResponse) {
  const TRANSIT_TIME = 30;
  await dbConnect();

  try {
    const data = req.nextUrl.searchParams;

    const date = new Date(data.get("date"));
    const type: string = data.get("type");
    if (type !== "Onsite" && type !== "Remote") {
      throw new Error("Invalid type");
    }

    const duration: string = data.get("duration");
    if (isNaN(parseInt(duration))) {
      throw new Error("Invalid duration");
    }

    const offset: string = data.get("offset") || "0";
    if (isNaN(parseInt(duration))) {
      throw new Error("Invalid offset");
    }

    const availableTimeSlots = await AppointmentService.generateWeeksAvailableTimeSlots(
      date,
      type,
      TRANSIT_TIME,
      parseInt(duration),
      parseInt(offset)
    ); 

    return NextResponse.json({ success: true, availableTimeSlots, length: availableTimeSlots.length });
  } catch (error) {

    console.log(error); 

    return NextResponse.json({ success: false, message: error.message });
  }
}
