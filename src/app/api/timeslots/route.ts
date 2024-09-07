// pages/api/timeslots.ts
import type { NextApiRequest, NextApiResponse } from "next";
import AppointmentService from "../../../services/appointments";
import dbConnect from "../../../lib/dbConnect";

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

export async function GET(req: NextApiRequest, res: NextApiResponse<TimeslotResponse>) {
  try {
    const { date } = req.query as { date: string };
    const slots = await AppointmentService.getAvailableTimeslots(date);
    res.status(200).json({ slots });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}

export async function POST(req: NextApiRequest, res: NextApiResponse<TimeslotResponse>) {
  try {
    const { date, slots } = req.body as { date: string; slots: string[] };
    await AppointmentService.setAvailableTimeslots(date, slots);
    res.status(200).json({ message: "Timeslots updated successfully" });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<TimeslotResponse>) {
  await dbConnect();

  switch (req.method) {
    case "GET":
      return GET(req, res);
    case "POST":
      return POST(req, res);
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
