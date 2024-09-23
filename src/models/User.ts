import mongoose from "mongoose";

const userInfoSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  companyName: String,
  street: String,
  postalCode: String,
  city: String,
  phoneNumber: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  emailVerificationToken: { type: String, required: true },
  emailVerified: { type: Boolean, required: true, default: false },
});

const UserInfo = mongoose.models.User || mongoose.model("User", userInfoSchema);

export { UserInfo };
