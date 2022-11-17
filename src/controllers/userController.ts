import User from "../models/user";
import Account from "../models/accounts";
import  {Request, Response} from 'express';

export default  {
      async create(req:Request, res:Response) {
    
            const user = req.body
            const exists =  await User.findOne({
                where:{username:user.username},
               
                
            });
            if(!exists) {
                let newUser = <any> await User.create(
                    {
                        username:user.username,
                        password:user.password
                    });
                if(newUser.username){
                    const newAccount = <any> await Account.create({balance:'100'});
                    newUser = await User.update(
                        {
                            accountId:newAccount.id
                        },
                        
                        {
                            returning:true,
                            where: {
                                id:newUser.id
                            }
                        }
                    )
                    return res.status(200).json(newUser[1])

                }

                    //console.log(newUser)
                    
                
                //console.log(newUser)
                

            }else {
                return res.status(500).json({error:true})

            }
            
            
            
        

        
        
       
       
       
    
    }

}





