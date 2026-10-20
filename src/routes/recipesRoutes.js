import { Router } from 'express';
import { getAllRecipe, getRecipeById, createRecipe, getOwnRecipes } from '../controllers/recipesController.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.get('/recipes', getAllRecipe);
router.post('/recipes', authenticate, createRecipe);
router.get('/recipes/own', authenticate, getOwnRecipes);
router.get('/recipes/:recipeId', getRecipeById);

export default router;