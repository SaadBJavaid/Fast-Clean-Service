// app/actions/fetchLicensePlateData.ts
"use server";
import liscencePlateService from "../services/liscence-plate";

export async function fetchLicensePlateData(licensePlate: string) {
  try {
    const data = await liscencePlateService.getLicensePlateData(licensePlate);
    return data;
  } catch (error) {
    console.error("Error in server action:", error);
    throw new Error("Failed to fetch license plate data");
  }
}
