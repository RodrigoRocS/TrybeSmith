import { Request, Response } from 'express';
import userService from '../services/user.services';
import mapStatusHTTP from '../utils/mapStatusHTTP';

interface CustomRequest extends Request {
  payload?: { id: number, name: string };
}

async function login(req: CustomRequest, res: Response): Promise<Response> {
  const { payload } = req;
  const serviceResponse = await userService.signIn(payload);
  return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
}

export default {
  login,
};
