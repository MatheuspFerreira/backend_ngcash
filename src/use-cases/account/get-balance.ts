import Account from "../../models/accounts";

export default async function getBalance (user:any) {
    try {
        const userAccount = await Account.findOne({
            where:{
                id:user.accountId,
                
            },
            
        })
       
        return userAccount
        
    } catch (error) {
        return (
            {
                error:true, 
                message:error
            }
        );
        
    }
    

}