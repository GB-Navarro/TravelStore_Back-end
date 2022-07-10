import express from 'express';
import authRouter from "./authRoutes/authRoutes.js";
import userRoutes from "./userRoutes/userRoutes.js";

const router = express.Router();
router.use(authRouter);
router.use(userRoutes);
export default router;