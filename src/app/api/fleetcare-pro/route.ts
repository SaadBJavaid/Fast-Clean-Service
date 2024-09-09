import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import dbConnect from "../../../lib/dbConnect";
import { fleetCareProSchema } from "../../../types/fleetcare-pro";
import FleetCareProService from "../../../services/fleetcare-pro";
import { NextRequest, NextResponse } from "next/server";

type FleetCareProResponse =
  | {
      message: string;
    }
  | {
      error: string;
    };

export async function POST(req: NextRequest, res: NextApiResponse<FleetCareProResponse>) {
  await dbConnect();

  try {
    const body = await req.json();
    const validatedData = fleetCareProSchema.parse(body);
    await FleetCareProService.submitFleetCareProForm(validatedData);
    return NextResponse.json({ message: "FleetCare Pro form submitted successfully" }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors.map((e) => e.message).join(", ") }, { status: 400 });
    } else {
      return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
  }
}