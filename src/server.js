import express from 'express';
import cros from 'cors';
import 'dotenv/config';
import { connectMongoDB } from './db/connectToMongoDB.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { logger } from './middlewares/logger.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import recipesRouter from './routes/recipesRoutes.js';
import ingredientsRouter from './routes/ingredientsRoutes.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(logger);
app.use(express.json());
app.use(cros());

app.use(recipesRouter);
app.use(ingredientsRouter);

app.use(notFoundHandler);

app.use(errorHandler);

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});