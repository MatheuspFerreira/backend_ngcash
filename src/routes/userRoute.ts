import { Router } from 'express';
import userController from '../controllers/userController';
const router = Router();

router 
    .get('/all', userController.getAll)
    .get('/logged', userController.logged)
    .post('/create', userController.create)


export default router;