import {Router} from 'express';
const router = Router();

import * as controller from '../controllers/auth.controller'
import {verifySignup} from '../middlewares'

router.post('/signup', [
    verifySignup.checkDuplicateUserNameOrEmail, 
    verifySignup.checkRolesExisted], 
    controller.signUp)
router.post('/signin', controller.signIn)


export default router;