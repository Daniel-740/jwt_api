import {Router} from 'express';
import * as controller from '../controllers/products.controller'
import {verifyToken} from '../middlewares'

const router = Router();

router.get('/', controller.getProducts)
router.post('/', verifyToken, controller.createProduct)
router.get('/:id', controller.getProductById)
router.put('/:id', verifyToken, controller.updateProductById)
router.delete('/:id', verifyToken, controller.deleteProductById)

export default router;