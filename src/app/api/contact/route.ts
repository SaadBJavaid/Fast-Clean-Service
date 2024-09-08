// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import dbConnect from "../../../lib/dbConnect";
import { contactSchema } from "../../../types/contactForm";
import ContactService from "../../../services/contact";

type ContactResponse =
  | {
      message: string;
    }
  | {
      error: string;
    };

export async function POST(req: NextApiRequest, res: NextApiResponse<ContactResponse>) {
  await dbConnect();

  try {
    // Validate the request body
    const validatedData = contactSchema.parse(req.body);

    // Use the service layer to handle the contact submission
    await ContactService.submitContactForm(validatedData);

    res.status(200).json({ message: "Contact form submitted successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Handle validation errors
      res.status(400).json({ error: error.errors.map((e) => e.message).join(", ") });
    } else {
      // Handle other errors
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ContactResponse>) {
  if (req.method === "POST") {
    return POST(req, res);
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
