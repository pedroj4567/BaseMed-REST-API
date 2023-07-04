import { Router } from "express";
import { login,getProfile } from '../controllers/auth_controller.js'
import auth from '../middleware/auth.js'

const route = Router();

route.post('/login',login);

route.get('/profile',auth,getProfile );
export default route;