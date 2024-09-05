import { NextResponse } from "next/server";
import liscencePlateService from "../../../services/liscence-plate";

export async function GET(request: Request) {
  console.log('a')
  const { searchParams } = new URL(request.url);
  console.log('a')
  const licensePlate = searchParams.get("licensePlate");
  console.log('a')
  
  console.log("aaaaaaaa", licensePlate);
  if (!licensePlate) {
    return NextResponse.json({ error: "License plate is required" }, { status: 400 });
  }
  
  console.log('a')
  try {
    const data = await liscencePlateService.getLicensePlateData(licensePlate);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching license plate data" }, { status: 500 });
  }
}
