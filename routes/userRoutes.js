import express from 'express';
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
} from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.route('/').get(getAllUsers).post(createUser);
userRouter.route('/:id').get(getUser).delete(deleteUser);

export default userRouter;
