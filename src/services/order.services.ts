import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';
import { ServiceResponse } from '../types/ServiceResponse';

async function takeAllOrders(): Promise<ServiceResponse<OrderSequelizeModel[]>> {
  const allProducts = await OrderModel.findAll();
  return { status: 'SUCCESSFUL', data: allProducts };
}
  
export default {
  takeAllOrders,
};