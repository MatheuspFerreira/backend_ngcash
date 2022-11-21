import Transaction from "../../models/transactions";


export async function getDebitedTransaction (accountId:string){

    try {
        const debitedTransactions = await <any>  Transaction.findAll({
            where:{
                debitedAccountId:accountId
             
            }
        });
    
        if(debitedTransactions.legth === 0){
            return;
        };
    
        const allDebitedTransactions = debitedTransactions.map((current:any) => {
    
            return current.dataValues;
    
        });
    
        return allDebitedTransactions;
        
    } catch (error) {
        return {
            error:true, 
            message:error
        };
        
    };

};