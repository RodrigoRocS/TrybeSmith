import { Request, Response } from 'express';
import orderService from '../services/order.services';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function takeAllOrders(req: Request, res: Response): Promise<Response> {
  const serviceResponse = await orderService.takeAllOrders();
  return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
}

export default {
  takeAllOrders,
};
