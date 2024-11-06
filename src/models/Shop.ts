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

const ShopAvailability = mongoose.models.ShopAvailability || mongoose.model("ShopAvailability", shopAvailabilitySchema);

export default ShopAvailability;
