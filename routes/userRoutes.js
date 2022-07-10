import express from 'express';
import { profile, history } from '../controllers/userControllers.js';

const router = express.Router();
router.get('/profile', profile);
router.get('/history', history);
export default router;