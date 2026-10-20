import { Router } from 'express';
import { getAllRecipe, getRecipeById, createRecipe } from '../controllers/recipesController.js';

const router = Router();

router.get('/recipes', getAllRecipe);
router.get('/recipes/:recipeId', getRecipeById);
router.post('/recipes', createRecipe);

export default router;