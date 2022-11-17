import { Router } from 'express';
import userController from '../controllers/userController';
const router = Router();

router 
    .get('/', )
    .post('/create', <any>userController.create)


export default router;