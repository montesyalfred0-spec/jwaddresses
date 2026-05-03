import express from 'express';
import { login, me, logout } from '../controllers/authController.js';
import { validate } from '../middlewares/validate.js';
import { loginSchema } from '../validations/schemas.js';

const router = express.Router();

router.post('/login', validate(loginSchema), login);
router.get('/me', me);
router.post('/logout', logout);

export default router;
