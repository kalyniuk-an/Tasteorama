import { Schema, model } from 'mongoose';

const favoriteSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    recipeId: {
      type: Schema.Types.ObjectId,
      ref: 'Recipe',
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

favoriteSchema.index(
  { userId: 1, recipeId: 1 },
  { unique: true }
);

export const Favorite = model('Favorite', favoriteSchema);