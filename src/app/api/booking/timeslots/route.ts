import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../lib/dbConnect";
import AppointmentService from "../../../../services/appointments";
import { NextRequest, NextResponse } from "next/server";

type TimeslotResponse =
  | {
      slots: string[];
    }
  | {
      message: string;
    }
  | {
      error: string;
    };

export async function GET(req: NextRequest, res: NextApiResponse) {
  await dbConnect();

  try {
    const data = req.nextUrl.searchParams;

    const date = new Date(data.get("date"));
    const availableTimeSlots = await AppointmentService.generateAvailableTimeSlots(date);

    return NextResponse.json({ success: true, availableTimeSlots, length: availableTimeSlots.length });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
