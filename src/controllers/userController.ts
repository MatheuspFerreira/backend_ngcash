import createUser from '../use-cases/user/create-user';
import  {Request, Response} from 'express';
import { verifyToken } from '../lib/token';
import getAll from '../use-cases/user/getAll-user';
import userLogged from "../use-cases/user/logged-user";


export default  {
    async create(req:Request, res:Response) { // public route (Create new user)
        console.log(req.body)
        
        const newUser = await createUser(req.body);

        if(newUser.error) {
            return res.status(400).send(newUser);

        }else {
            return res.status(201).send(
                {
                    success:true, 
                    message:"user created"
                }
            );
        };

    },

    async getAll(req:Request, res:Response){
        
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

        const data = await getAll() as any
        if(data?.error) {
            return res.status(400).send(data);
        };

        return res.status(200).send(data);

    },

    async logged (req:Request, res:Response) {
        const token = req.headers.authorization?.split(" ")[1] || "";
        const user = await  verifyToken(token) as any;
        
        if(!token || user.error) {
            return res.status(401).send(
                {
                    error:true,
                    message:"Error, Você não possui autorização!"
                }
            );
        };

        const userData = await userLogged(user);
        if(userData.error){
            return res.status(400).send(userData);
        };

        return res.status(200).send(userData);

    }

}





