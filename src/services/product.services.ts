import ProductModel, { ProductSequelizeModel } from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

async function createProduct(product: Product): Promise<ServiceResponse<Product>> {
  const newProduct = await ProductModel.create(product);
  return { status: 'CREATED', data: newProduct.dataValues };
}

async function takeAllProducts(): Promise<ServiceResponse<ProductSequelizeModel[]>> {
  const allProducts = await ProductModel.findAll();
  console.log(allProducts);
  
  return { status: 'SUCCESSFUL', data: allProducts };
}
  
export default {
  createProduct,
  takeAllProducts,
};