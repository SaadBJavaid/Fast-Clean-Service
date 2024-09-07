import mongoose, { Document, Model } from "mongoose";

export interface ITimeslot extends Document {
  date: Date;
  slots: string[];
}

export const TimeslotSchema = new mongoose.Schema<ITimeslot>({
  date: { type: Date, required: true },
  slots: [{ type: String }],
});

export const Timeslot: Model<ITimeslot> = mongoose.models.Timeslot || mongoose.model<ITimeslot>("Timeslot", TimeslotSchema);
