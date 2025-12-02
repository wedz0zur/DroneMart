import { Schema } from "mongoose";
import { model } from "mongoose";

const Product = new Schema({
  name: { type: String, unique: true, required: true },
  description: {type: String , required: true },
  price: { type: String, required: true },
  registrationDate: { type: Date, default: Date.now }
});

export default model("Product", Product);