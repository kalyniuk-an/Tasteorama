import { Router } from 'express';
import { getAllRecipe, getRecipeById, createRecipe, getOwnRecipes, addFavorite, removeFavorite, getFavoriteRecipes } from '../controllers/recipesController.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.get('/recipes', getAllRecipe);
router.post('/recipes', authenticate, createRecipe);
router.get('/recipes/own', authenticate, getOwnRecipes);
router.get('/recipes/favorites', authenticate, getFavoriteRecipes);
router.post('/recipes/:recipeId/favorite', authenticate, addFavorite);
router.delete('/recipes/:recipeId/favorite', authenticate, removeFavorite);
router.get('/recipes/:recipeId', getRecipeById);

export default router;