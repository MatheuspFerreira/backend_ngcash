import Account from "../../models/accounts";
import Transaction from "../../models/transactions";


export default async function transferBalance (userCashOut:any, userCashIn:any, value:number) {
   
    if(!userCashIn || !userCashOut || userCashIn ==="" || userCashOut ==="") {
        return (
            {
                error:true,
                message:"Você precisa selecionar o usuário para qual deseja transferir"
            }
        );
    }else if (value <= 0){
        return (
            {
                error:true,
                message:"Digite um valor valido para realizar a transferência!"
            }
        );

    };

    try {
        const accountCashOut = await <any> Account.findOne({
            where:{
                id:userCashOut.accountId,
                
            },
            
        })
        const accountCashIn = await <any> Account.findOne({
            where:{
                id:userCashIn.accountId,
                
            },
            
        });

        if(parseInt(accountCashOut.balance) >= value) {
            accountCashOut.balance = parseFloat(accountCashOut.balance) - value;
            accountCashIn.balance = parseFloat(accountCashIn.balance) + value;
            accountCashIn.balance = accountCashIn.balance;
            accountCashOut.balance = accountCashOut.balance
    
            const newBalanceCashOut = await <any>Account.update(
                {
                    balance:accountCashOut.balance

                },
                {
                    where:{
                        id:accountCashOut.id

                    },
                    returning:true
                }
 
            );

            const newBalanceCashIn =  await <any> Account.update(
                {
                    balance:accountCashIn.balance 

                },
                {
                    where:{
                        id:accountCashIn.id

                    },
                    returning:true
                }
 
            );

            if(newBalanceCashIn[1][0].dataValues.balance === accountCashIn.balance && newBalanceCashOut[1][0].dataValues.balance === accountCashOut.balance) {
                await <any> Transaction.create({
                    value:value,
                    debitedAccountId:newBalanceCashOut[1][0].dataValues.id,
                    creditedAccountId:accountCashIn.id

                });

                return(
                    {
                        success:true,
                        message:"Transferência realizada com sucesso!"
                    }
                );
            };

        }else if(value > accountCashOut.balance){
            return (
                {
                    error:true,
                    message:"Você não possui saldo suficiente para realizar essa operação!",
                    
                }
            );

        }else if(!accountCashIn) {
            return (
                {
                    error:true,
                    message:"O usuário que deseja realizar a transferência não existe, selecione um usuário valido!"
                }
            );

        }

        
    } catch (error) {

        return (
            {
                error:true,
                message:error
            }
        );
        
    };
    
};