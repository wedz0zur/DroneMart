import { Schema } from "mongoose";
import { model } from "mongoose";

const Product = new Schema({
  name: { type: String, unique: true, required: true },
  description: {type: String , required: true },
  price: { type: String, required: true },
  registrationDate: { type: Date, default: Date.now },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' } 
});

export default model("Product", Product);