// models/Booking.ts
import mongoose, { Document, Schema } from 'mongoose';
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
  packageType: string;
  packageName: string;
  appointmentTimestamp: Date;
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
  appointmentTimestamp: { type: Date, required: true },
  vehicleDetails: { type: Object, required: true },
  serviceAddons: [String]
});

export default mongoose.models.Booking || mongoose.model<IBooking>('Booking', bookingSchema);
