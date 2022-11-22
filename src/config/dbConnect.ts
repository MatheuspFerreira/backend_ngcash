import { Sequelize } from "sequelize";

const sequelize = new Sequelize( {
    dialect: 'postgres',
    host: 'ngcash.cwlwyw4npfr5.us-east-1.rds.amazonaws.com',
    port: 5432,
    database: 'ng_cash',
    username: 'root',
    password: 'ngc4$h9898',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});



export default sequelize;