// pages/api/cars.ts
import type {NextApiResponse} from 'next';
import dbConnect from '../../../lib/dbConnect';
import AppointmentService from '../../../services/appointments';
import {NextRequest, NextResponse} from "next/server";

type CarResponse =
  | {
      numCars: number;
    }
  | {
      message: string;
    }
  | {
      error: string;
    };

export async function GET(req: NextRequest, res: NextApiResponse<CarResponse>) {
  await dbConnect();

  try {
    const data = req.nextUrl.searchParams;

    const date = new Date(data.get("date"));

    if (!date) {
      throw new Error("Date not found");
    }

    const numCars = await AppointmentService.getNumCars(date);
    return NextResponse.json({ numCars });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message });
  }
}

export async function POST(req: NextRequest) {
  await dbConnect();

  try {
    const body = await req.json();
    const { date, cars } = body as { date: Date; cars: number };
    await AppointmentService.setNumCars(date, cars);
    console.log(date, cars);
    return NextResponse.json({ message: "Timeslots updated successfully" });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message });
  }
}
