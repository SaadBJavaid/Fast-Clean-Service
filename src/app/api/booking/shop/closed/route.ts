import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../../lib/dbConnect";
import shopService from "../../../../../services/shop";

export async function GET(req: NextRequest) {
  await dbConnect();

  try {
    const dates = await shopService.getAllShopClosed();

    return NextResponse.json({ success: true, dates });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
