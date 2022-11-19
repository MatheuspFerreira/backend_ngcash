import  {Request, Response} from 'express';
import { verifyToken } from '../lib/token';
import getAllTransactions from '../use-cases/transaction/getAll-transaction'


export default  {
    async getAll(req:Request, res:Response) {
        const token = req.headers.authorization?.split(" ")[1] || "";
        const user = await <any> verifyToken(token);
        
        if(!token || user.error) {
            return res.status(401).send(
                {
                    error:true,
                    message:"Error, Você não possui autorização!"
                }
            )
        };
        
        const allTransactions = await <any>getAllTransactions();
        if(allTransactions.error) {
            return res.status(400).send(allTransactions);
        };

        return res.status(200).send(allTransactions);
        
    }



}