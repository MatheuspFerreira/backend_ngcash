import express from 'express';
import cors from 'cors';
import sequelize from "./config/dbConnect";
import User from './models/user';
import Account from './models/accounts';
import Transaction from './models/transactions';
import userRoute from './routes/userRoute';
import publicRoute from "./routes/publicRoute"
import accountRoute from "./routes/accountRoute"
import transaction from "./routes/transactionRoute"

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());


// DB Connect

try {
    sequelize.sync();
    //Account.sync();
    //User.sync();
   //Transaction.sync();
   // console.log('Connection has been established successfully.');
    
} catch (error) {
    console.error('Unable to connect to the database:', error);
    
};



// Routes
app.use('/', userRoute);
app.use('/auth', publicRoute)
app.use('/account', accountRoute)
app.use('/transaction', transaction)



export default app;