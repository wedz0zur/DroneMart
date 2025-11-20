import { Schema } from "mongoose";
import { model } from "mongoose";

const User = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
  role: { type: String, default: "User" }
});

export default model("User", User);