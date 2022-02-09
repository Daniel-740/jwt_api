import {Router} from 'express';
const router = Router();

import * as controller from '../controllers/auth.controller'

router.post('/signup', controller.signUp)
router.post('/signin', controller.signIn)


export default router;