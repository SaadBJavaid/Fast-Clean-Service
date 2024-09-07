// pages/api/cars.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/dbConnect';
import AppointmentService from '../../../services/appointments';

type CarResponse = {
  numCars: number;
} | {
  message: string;
} | {
  error: string;
};

export async function GET(_req: NextApiRequest, res: NextApiResponse<CarResponse>) {
  try {
    const numCars = await AppointmentService.getNumCars();
    res.status(200).json({ numCars });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}

export async function POST(req: NextApiRequest, res: NextApiResponse<CarResponse>) {
  try {
    const { numCars } = req.body as { numCars: number };
    await AppointmentService.setNumCars(numCars);
    res.status(200).json({ message: 'Number of cars updated successfully' });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<CarResponse>) {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      return GET(req, res);
    case 'POST':
      return POST(req, res);
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
