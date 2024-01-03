import express from 'express';
import authRouter from './routes/auth.routes.js';
import dashboardRouter from './routes/dashboard.routes.js';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use('/api/login', authRouter);
app.use('/api/dashboard', dashboardRouter);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})
