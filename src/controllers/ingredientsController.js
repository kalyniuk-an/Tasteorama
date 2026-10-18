// import createHttpError from 'http-errors';
import { Ingredient } from '../models/ingredient.js';

export const getAllIngredient = async (req, res) => {
  const ingredients = await Ingredient.find();
  res.status(200).json(ingredients);
};