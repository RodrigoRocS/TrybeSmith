import { Router } from 'express';
import userController from '../controllers/user.controllers';

const orderRoute = Router();

orderRoute.get('/products', userController.login);

export default orderRoute;