import { Schema, model } from "mongoose";

const ingredientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    desc: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    }
  },
  {
    versionKey: false,
  },
);

export const Ingredient = model('Ingredient', ingredientSchema);