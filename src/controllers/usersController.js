import createHttpError from 'http-errors';
import { User } from '../models/user.js';

export const getUser = async (req, res) => {
  const { email } = req.user;
  
  const user = await User.findOne({ email });

  if (!user) {
    throw createHttpError(404,'User not found');
  }

  res.status(200).json(user);
}
