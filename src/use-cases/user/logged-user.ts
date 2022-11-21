import Account from "../../models/accounts";
import { getCreditedTransaction } from "../transaction/credited-transactions";
import { getDebitedTransaction } from "../transaction/debited-transactions";

export default async function userLogged (user:any) {

    try {
        const userAccount = await <any> Account.findOne({
            where:{
            id:user.accountId
            }
        })
 
        const debitedTransactions = await getDebitedTransaction(user.accountId)
        const creditedTransactions = await getCreditedTransaction(user.accountId)

        return {
            user:user,
            account:userAccount.dataValues,
            transactions:{
                debited:debitedTransactions,
                credited:creditedTransactions
            }
        };

        
        
    } catch (error) {
        return {
            error:true, 
            message:error
        };
        
    };
    
};