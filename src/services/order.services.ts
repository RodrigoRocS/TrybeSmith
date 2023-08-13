import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { FormatedOrder } from '../types/Order';
import { ServiceResponse } from '../types/ServiceResponse';

async function takeAllOrders(): Promise<ServiceResponse<FormatedOrder>> {
  const allProducts = await OrderModel.findAll({
    attributes: ['id', 'userId'],
    include: [{
      model: ProductModel,
      as: 'productIds',
      attributes: ['id'],
    }],
  });

  const orderWhitProductIds = allProducts.map((order) => ({
    id: order.dataValues.id,
    userId: order.dataValues.userId,
    productIds: order.dataValues.productIds?.map((e) => e.id) || [],
  }));

  return { status: 'SUCCESSFUL', data: orderWhitProductIds };
}
  
export default {
  takeAllOrders,
};