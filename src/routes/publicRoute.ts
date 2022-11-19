import { Router } from 'express';
import AuthController from '../controllers/public/auth-controller';

const router = Router();

router.post('/login', AuthController.login);
router.get('/verify-token', AuthController.verify);

export default router;