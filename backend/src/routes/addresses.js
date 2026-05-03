import express from 'express';
import { getAddresses, createAddress } from '../controllers/addressController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { validate } from '../middlewares/validate.js';
import { addressSchema } from '../validations/schemas.js';

const router = express.Router();

router.get('/neighborhood/:neighborhoodId', authMiddleware, getAddresses);
router.post('/', authMiddleware, validate(addressSchema), createAddress);

export default router;
