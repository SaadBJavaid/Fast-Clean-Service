import mongoose from "mongoose";

// Car Availability Schema
const carAvailabilitySchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    unique: true,
  },
  availableCars: {
    type: Number,
    required: true,
    min: 0,
  },
});

export interface ICarAvailability extends mongoose.Document {
  date: Date;
  availableCars: number;
}

export default mongoose.models.CarAvailability || mongoose.model("CarAvailability", carAvailabilitySchema);
