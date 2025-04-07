import express from 'express';
import { submitRating } from '../controllers/ratingController.js';

const router = express.Router();

// API endpoints
router.post('/submitRating', submitRating);

export default router;
