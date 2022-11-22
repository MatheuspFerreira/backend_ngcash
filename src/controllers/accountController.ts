import  {Request, Response} from 'express';
import { verifyToken } from '../lib/token';
import getBalance from '../use-cases/account/get-balance';
import transferBalance from '../use-cases/account/transfer-balance';


export default  {
    async getOne(req:Request, res:Response) {
        const token = req.headers.authorization?.split(" ")[1] || "";
        const user = await <any> verifyToken(token);
        
        if(!token || user.error) {
            return res.status(401).send(
                {
                    error:true,
                    message:"Error, Você não possui autorização!"
                }
            );
        };
        
        const userAccount = await <any> getBalance(user);
        if(userAccount.error) {
            return res.status(401).send(userAccount);
        };

        return res.status(200).send(userAccount);
        
    },

    async transfer(req:Request, res:Response) {
        const token = req.headers.authorization?.split(" ")[1] || "";
        const user = await <any> verifyToken(token);
        
        if(!token || user.error) {
            return res.status(401).send(
                {
                    error:true,
                    message:"Error, Você não possui autorização!"
                }
            );
        };

        const userCashOut = user;
        const userCashIn = req.body.usercashin;
        const value = parseInt(req.body.value);

        if(user.id === userCashIn.id){
            return res.status(400).send({
                error:true,
                message:"Essa operação não é permita!"
            });
        };

        const transfer = await transferBalance (userCashOut, userCashIn, value);

        if(transfer?.error){
            return res.status(400).send(transfer);
        };

        return res.status(200).send(transfer);

    }

};