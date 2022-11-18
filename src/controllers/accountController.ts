import  {Request, Response} from 'express';
import { verifyToken } from '../lib/token';
import getBalance from '../use-cases/account/get-balance';


export default  {
    async getOne(req:Request, res:Response) {
        const token = req.body.token;
        const user = await <any> verifyToken(token);
        
        if(!token || user.error) {
            return res.status(400).send(
                {
                    error:true,
                    message:"Error, Você não possui autorização!"
                }
            )
        };
        
        const userAccount = await <any> getBalance(user);
        if(userAccount.error) {
            return res.status(400).send(userAccount);
        };

        return res.status(200).send(userAccount);
        
    }



}