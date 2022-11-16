import Sequelize from 'sequelize';
import database from "../config/dbConnect";
import Account from './accounts';

const User = database.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true

    },

    username: {
        type: Sequelize.STRING,
        allowNull:false
        
    },

    password:{
        type: Sequelize.STRING,
        allowNull:false

    },
   
    
});

User.belongsTo(Account, {
    constraints:true,
    foreignKey: 'accountId'
});




export default User;