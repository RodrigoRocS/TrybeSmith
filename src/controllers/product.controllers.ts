import { Request, Response } from 'express';
import productService from '../services/product.services';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function createProduct(req: Request, res: Response): Promise<Response> {
  const newProduct = req.body;
  const serviceResponse = await productService.createProduct(newProduct);
  return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
}

async function takeAllProducts(req: Request, res: Response): Promise<Response> {
  const serviceResponse = await productService.takeAllProducts();
  return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
}

export default {
  createProduct,
  takeAllProducts,
};
