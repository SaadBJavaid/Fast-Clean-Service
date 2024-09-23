// repositories/contactRepository.ts
import mongoose, { Document, Model } from "mongoose";
import { IContact as IContactScehma } from "../types/contactForm";

export interface IContact extends Document, IContactScehma {
  createdAt: Date;
}

export const ContactSchema = new mongoose.Schema<IContact>({
  name: { type: String, required: true, maxlength: 100 },
  email: { type: String, required: true },
  message: { type: String, required: true, maxlength: 1000 },
  createdAt: { type: Date, default: Date.now },
});

export const Contact: Model<IContact> = mongoose.models.Contact || mongoose.model<IContact>("Contact", ContactSchema);
