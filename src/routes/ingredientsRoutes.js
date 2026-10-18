import { Router } from 'express';
import { getAllIngredient } from '../controllers/ingredientsController.js';

const router = Router();

router.get('/ingredients', getAllIngredient);

export default router;