import { Router } from 'express';
import productController from '../controllers/product.controllers';

const productRoute = Router();

productRoute.post('/products', productController.createProduct);
productRoute.get('/products', productController.takeAllProducts);

export default productRoute;