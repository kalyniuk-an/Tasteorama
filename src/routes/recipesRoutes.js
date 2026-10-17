import { Router } from 'express';
import { getAllRecipe, getRecipeById } from '../controllers/recipesController.js';

const router = Router();

router.get('/recipes', getAllRecipe);
router.get('/recipes/:recipeId', getRecipeById);

export default router;