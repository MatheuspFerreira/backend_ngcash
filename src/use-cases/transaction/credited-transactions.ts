import Transaction from "../../models/transactions";


export async function getCreditedTransaction (accountId:string){

    try {
        const creditedTransactions = await <any>  Transaction.findAll({
            where:{
                creditedAccountId:accountId
             
            }
        });
    
        if(creditedTransactions.legth === 0){
            return;
        };
    
        const allCreditedTransactions = creditedTransactions.map((current:any) => {
    
            return current.dataValues;
    
        });
    
        return allCreditedTransactions;
        
    } catch (error) {
        return {
            error:true, 
            message:error
        };
        
    };

};