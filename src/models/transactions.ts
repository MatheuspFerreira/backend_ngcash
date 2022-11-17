import Sequelize from 'sequelize';
import database from "../config/dbConnect";
import Account from './accounts';


const Transaction = database.define('transactions', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true

    },
    value :{
        type: Sequelize.DECIMAL,
        allowNull:false

    },
    createdAt :{
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.fn('now')

    },
   
    
});

Account.hasMany(Transaction, {
    foreignKey: 'debitedAccountId',
    
});

Account.hasMany(Transaction, {
    foreignKey: 'creditedAccountId'
    
});



export default Transaction;