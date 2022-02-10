import {Router} from 'express';
import * as controller from '../controllers/user.controller';
import { authJwt, verifySignup } from '../middlewares';

const router = Router();

router.post('/', 
    [   authJwt.verifyToken, 
        authJwt.isAdmin,
        verifySignup.checkRolesExisted
    ], 
controller.createUser)

export default router;