import { Sequelize } from "sequelize";

const sequelize = new Sequelize( {
    dialect: 'postgres',
    host: 'teste.crnkyuswrowk.us-east-1.rds.amazonaws.com',
    port: 5432,
    database: 'ng_cash',
    username: 'root',
    password: 'teste1234',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});



export default sequelize;