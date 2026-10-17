import createHttpError from 'http-errors';
import { Recipe } from '../models/recipe.js';

export const getAllRecipe = async (req, res) => {
  const recipes = await Recipe.find();
  res.status(200).json(recipes);
};

export const getRecipeById = async (req, res) => {
  const { recipeId } = req.params;
  const recipe = await Recipe.findById(recipeId);
  if (!recipe) {
    throw createHttpError(404, 'Recipe not found');
  }
  res.status(200).json(recipe);
};