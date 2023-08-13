import express from 'express';
import loginRoute from './routers/login.router';
import orderRoute from './routers/order.router';
import productRoute from './routers/product.router';

const app = express();

app.use(express.json());

app.use(loginRoute);
app.use(orderRoute);
app.use(productRoute);

export default app;
