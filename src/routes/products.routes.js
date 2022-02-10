import {Router} from 'express';
import * as controller from '../controllers/products.controller'
import {authJwt} from '../middlewares'

const router = Router();

router.get('/', controller.getProducts)
router.post('/', [authJwt.verifyToken, authJwt.isModerator], controller.createProduct)
router.get('/:id', controller.getProductById)
router.put('/:id', [authJwt.verifyToken, authJwt.isAdmin], controller.updateProductById)
router.delete('/:id', [authJwt.verifyToken, authJwt.isAdmin], controller.deleteProductById)

export default router;