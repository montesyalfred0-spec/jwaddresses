import express from 'express';
import { getTerritories } from '../controllers/territoryController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, getTerritories);

export default router;
