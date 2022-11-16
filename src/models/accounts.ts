import Sequelize from 'sequelize';
import database from "../config/dbConnect";

const Account = database.define('accounts', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true

    },

    balance: {
        type: Sequelize.DECIMAL,
        allowNull:false
        
    },
 
});



export default Account;