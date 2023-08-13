import { Request, Response } from 'express';
import userService from '../services/user.services';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function login(req: Request, res: Response): Promise<Response> {
  const user = req.body;
  const serviceResponse = await userService.signIn(user);
  return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
}

export default {
  login,
};
