// models/Booking.ts
import mongoose, { Document, Schema, Types } from "mongoose";
import { LicensePlateData } from "../types/rdw";

export interface IBooking extends Document {
  firstName: string;
  surname: string;
  companyName?: string;
  street?: string;
  zipCode?: string;
  city?: string;
  email: string;
  phoneNumber: string;
  vehicleMakeAndModel: string;
  message?: string;
  serviceName: string;
  packageType: any;
  packageName: string;
  appointmentTimestamp: Date;
  price: number;
  vehicleDetails: LicensePlateData;
  serviceAddons: { addons: string[]; detailing: string[] };
}

const bookingSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  surname: { type: String, required: true },
  companyName: String,
  street: String,
  zipCode: String,
  city: String,
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  vehicleMakeAndModel: { type: String, required: true },
  message: String,
  serviceName: { type: String, required: true },
  packageType: { type: String, required: true },
  packageName: { type: String, required: true },
  appointmentTimestamp: { type: Date, required: true },
  vehicleDetails: { type: Object, required: true },
  price: { type: Number, required: true },
  serviceAddons: {
    addons: { type: [String], default: [] }, // Array of strings for addons
    detailing: { type: [String], default: [] }, // Array of strings for detailing
  },
});

export default mongoose.models.Booking ||
  mongoose.model<IBooking>("Booking", bookingSchema);
