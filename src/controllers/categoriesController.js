import { Categorie } from '../models/categorie.js';

export const getAllCategories = async (req, res) => {
  const categories = await Categorie.find();
  res.status(200).json(categories);
};