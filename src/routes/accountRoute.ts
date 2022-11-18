import { Router } from 'express';
import userController from '../controllers/userController';
const router = Router();

router 
    .post('/create', userController.create)


export default router;