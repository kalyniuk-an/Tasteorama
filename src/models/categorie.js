import { Schema, model } from "mongoose";

const categorieSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
  },
);

export const Categorie = model('Categorie', categorieSchema);