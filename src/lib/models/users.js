const mongoose = require("mongoose");
const { Schema } = mongoose;

// User schema
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { collection: "users" }
);

export default mongoose.models?.User || mongoose.model("User", userSchema);
