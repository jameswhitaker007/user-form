const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      required: true,
      unique: true,
    },
    user_age: {
      type: Number,
      default: false,
      required: true,
    },
    user_city: {
      type: String,
      default: false,
      required: true,
    },
    user_phone: {
      type: String,
      default: false,
      required: true,
    },
    user_email: {
      type: String,
      default: false,
      required: true,
    },
  },
  { timestamp: true }
);
module.exports = mongoose.model("user", userSchema);
