import User from "../../models/user";
import Account from "../../models/accounts";
import bcrypt from "bcrypt";
import { verifyData, verifyUser } from "./validator/create-user";


export default async function createUser (data:any) {
    
    try {
        const verify = await verifyData(data)

        if(verify !== true) {
            return verify;
        };

        const user = data
        const hashedPassword = await bcrypt.hash(data.password, 10)
        const exists = await verifyUser(data, User);

        if(!exists) {
            let newUser = <any> await User.create(
                {
                    username:user.username,
                    password:hashedPassword
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
                return newUser[1]
    
            }
    
        }else if(exists){
            return {error:true, message:"Este usuário já está cadastrado!"}

        }
            
        
    } catch (error) {

        console.log(error)
        return {
            error:true, 
            message:error
        };
  
    };
    

}