import { Router } from 'express';
import orderController from '../controllers/order.controllers';

const orderRoute = Router();

orderRoute.get('/orders', orderController.takeAllOrders);

export default orderRoute;