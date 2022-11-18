import createUser from '../use-cases/user/create-user';
import  {Request, Response} from 'express';


export default  {
    async create(req:Request, res:Response) { // public route (Create new user)
        
        const newUser = await createUser(req.body);

        if(newUser.error) {
            return res.status(500).send(newUser)

        }else {
            return res.status(200).send(
                {
                    success:true, 
                    message:"user created"
                }
            )
        };

    }



}





