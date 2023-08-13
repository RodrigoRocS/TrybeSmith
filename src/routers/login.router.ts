import { Router } from 'express';
import userController from '../controllers/user.controllers';
import validateLogin from '../middlewares/validateLogin';

const loginRoute = Router();

loginRoute.post('/login', validateLogin, userController.login);

export default loginRoute;