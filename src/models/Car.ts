import mongoose, { Model, Document } from "mongoose";

export interface ICar extends Document {
  numCars: number;
}

export const CarSchema = new mongoose.Schema<ICar>({
  numCars: { type: Number, required: true },
});

export const Car: Model<ICar> = mongoose.models.Car || mongoose.model<ICar>("Car", CarSchema);
