import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import dbConnect from "../../../lib/dbConnect";
import { fleetCareProSchema } from "../../../types/fleetcare-pro";
import FleetCareProService from "../../../services/fleetcare-pro";

type FleetCareProResponse =
  | {
      message: string;
    }
  | {
      error: string;
    };

export async function POST(req: NextApiRequest, res: NextApiResponse<FleetCareProResponse>) {
  await dbConnect();

  try {
    const validatedData = fleetCareProSchema.parse(req.body);
    await FleetCareProService.submitFleetCareProForm(validatedData);
    res.status(200).json({ message: "FleetCare Pro form submitted successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: error.errors.map((e) => e.message).join(", ") });
    } else {
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<FleetCareProResponse>) {
  if (req.method === "POST") {
    return POST(req, res);
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
