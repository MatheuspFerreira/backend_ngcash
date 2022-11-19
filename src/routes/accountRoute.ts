import { Router } from 'express';
import accountController from '../controllers/accountController';
const router = Router();

router 
    .get('/', accountController.getOne)
    .post('/transfer', accountController.transfer)


export default router;