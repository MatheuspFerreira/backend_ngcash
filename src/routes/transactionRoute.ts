import { Router } from 'express';
import transactionController from '../controllers/transactionController';
const router = Router();

router 
    .get('/all',  transactionController.getAll)


export default router;