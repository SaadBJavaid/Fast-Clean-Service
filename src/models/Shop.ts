import mongoose from "mongoose";

// Shop Availability Schema
const shopAvailabilitySchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    unique: true,
  },
  isOpen: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export default mongoose.models.ShopAvailablity || mongoose.model("ShopAvailability", shopAvailabilitySchema);
