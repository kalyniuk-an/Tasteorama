import { Router } from 'express';
import { authenticate } from '../middlewares/authenticate.js';
import { getUser } from '../controllers/usersController.js';

const router = Router();

router.get('/users/me', authenticate, getUser);

export default router;