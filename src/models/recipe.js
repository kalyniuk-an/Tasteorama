import { Schema, model } from 'mongoose';

const recipeIngredientSchema = new Schema(
  {
    id: {
      type: Schema.Types.ObjectId,
      ref: 'Ingredient',
      required: true,
    },
    measure: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false },
);

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    area: {
      type: String,
      required: true,
      trim: true,
    },
    instructions: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    "thumb": {
      type: String,
      default: 'https://ac.goit.global/fullstack/react/default-avatar.jpg',
    },
    time: {
      type: Number,
      required: true,
      min: 1,
    },
    ingredients: {
      type: [recipeIngredientSchema],
      required: true,
      validate: {
        validator: (ingredients) => ingredients.length > 0,
        message: 'A recipe must contain at least one ingredient',
      }
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Recipe = model('Recipe', recipeSchema);