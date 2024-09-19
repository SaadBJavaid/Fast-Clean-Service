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

export default mongoose.models.CarAvailability || mongoose.model("CarAvailability", carAvailabilitySchema);
