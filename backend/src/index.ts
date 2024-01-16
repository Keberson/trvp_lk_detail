import express, {Express} from 'express';
import authRouter from './routes/auth.routes.js';
import dashboardRouter from './routes/dashboard.routes.js';
import cors from 'cors';
import db from './db/connection.js'

const app: Express = express();
const PORT: number = Number(process.env["PORT"]);

app.use(express.json());
app.use(cors({
    origin: process.env["CORS"].split(' ')
}));

app.use('/api/login', authRouter);
app.use('/api/dashboard', dashboardRouter);

app.listen(PORT, async () => {
    console.log(`App listening on port ${PORT}`);
    await db.deleteExpiredOrders();
    console.log('Deleted all expired orders');
})

