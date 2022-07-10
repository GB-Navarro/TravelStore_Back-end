import express from 'express';
import { profile, history } from '../../controllers/userController.js';

const userRouter = express.Router();
userRouter.get('/profile', profile);
userRouter.get('/history', history);

export default userRouter;