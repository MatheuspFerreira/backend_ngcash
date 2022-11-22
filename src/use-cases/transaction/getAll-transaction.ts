import Transaction from "../../models/transactions";


export default async function getAllTransactions () {
    
    try {
        const allTransactions = Transaction.findAll()

        return allTransactions;
        
    } catch (error) {
        return (
            {
                error:true,
                message:"Error, Você não possui autorização!"
            }
        );
        
    };
       

}