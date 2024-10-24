import {NextResponse} from "next/server";
import liscencePlateService from "../../../services/liscence-plate";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const licensePlate = searchParams.get("licensePlate");

  if (!licensePlate) {
    return NextResponse.json({ error: "License plate is required" }, { status: 400 });
  }

  try {
    const data = await liscencePlateService.getLicensePlateData(licensePlate);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching license plate data" }, { status: 500 });
  }
}
