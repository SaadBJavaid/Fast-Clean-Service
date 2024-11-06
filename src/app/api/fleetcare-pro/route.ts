import type {NextApiResponse} from "next";
import {z} from "zod";
import dbConnect from "../../../lib/dbConnect";
import {fleetCareProSchema} from "../../../types/fleetcare-pro";
import FleetCareProService from "../../../services/fleetcare-pro";
import {NextRequest, NextResponse} from "next/server";

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

export async function GET(req: NextRequest) {
  await dbConnect();

  try {
    const data = await FleetCareProService.getFleetCareProForms();
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors.map((e) => e.message).join(", ") }, { status: 400 });
    } else {
      return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
  }
}

export async function PUT(req: NextRequest) {
  await dbConnect();

  try {
    const id = await req.nextUrl.searchParams.get("id");

    const data = await FleetCareProService.completeFleetCareProForm(id);
    return NextResponse.json({ message: "FleetCare Pro form submitted successfully", data }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors.map((e) => e.message).join(", ") }, { status: 400 });
    } else {
      return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
  }
}

export async function DELETE(req: NextRequest) {
  await dbConnect();

  try {
    const id = await req.nextUrl.searchParams.get("id");

    const data = await FleetCareProService.deleteFleetCareForm(id);
    return NextResponse.json({ message: "FleetCare Pro form submitted successfully", data }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors.map((e) => e.message).join(", ") }, { status: 400 });
    } else {
      return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
  }
}