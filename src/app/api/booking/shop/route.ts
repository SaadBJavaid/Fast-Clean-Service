import { NextApiResponse } from "next";
import dbConnect from "../../../../lib/dbConnect";
import AppointmentService from "../../../../services/appointments";
import { NextRequest, NextResponse } from "next/server";
import shopService from "../../../../services/shop";

export async function GET(req: NextRequest, res: NextApiResponse) {
  await dbConnect();

  try {
    const data = req.nextUrl.searchParams;
    const date = new Date(data.get("date"));

    const isOpen = await shopService.isShopOpen(new Date(date));

    return NextResponse.json({ success: true, isOpen, date: date });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}

export async function POST(req: NextRequest, res: NextApiResponse) {
  await dbConnect();

  try {
    const data = await req.json();
    const date = new Date(data.date);
    const openClose = data.openClose;
    
    const success = await shopService.openCloseShop(date, openClose);

    return NextResponse.json({ success, isOpen: openClose, date: date });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, message: error.message });
  }
}
