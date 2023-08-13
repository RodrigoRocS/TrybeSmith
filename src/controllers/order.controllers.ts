import { Request, Response } from 'express';
import orderService from '../services/order.services';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function takeAllOrders(req: Request, res: Response): Promise<Response> {
  const { status, data } = await orderService.takeAllOrders();
  return res.status(mapStatusHTTP(status)).json(data);
}

export default {
  takeAllOrders,
};
