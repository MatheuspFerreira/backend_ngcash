import express from 'express';
import cors from 'cors';
import sequelize from "./config/dbConnect";
import User from './models/user';
import Account from './models/accounts';
import Transaction from './models/transactions';

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// DB Connect

sequelize.sync() 

Account.sync()
User.sync()
Transaction.sync()

.then(() => {   
    console.log('Connection has been established successfully.');
    
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
        
});





app.get('/',(req, res)=> {
    res.status(200).send({alive:true})
})


export default app;