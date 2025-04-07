import express from 'express';
import { serveCorePage, serveResultPage } from '../controllers/pageController.js';

const router = express.Router();

// Home page redirect
router.get('/', (req, res) => {
    res.redirect(301, '/static/index.html');
});

// Core pages routes
for (let i = 1; i <= 5; i++) {
    router.get(`/core${i}`, (req, res) => serveCorePage(req, res, i));
}

// Results page route
router.get('/resultat', serveResultPage);

export default router;
