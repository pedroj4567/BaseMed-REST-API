import {Router} from 'express'

import diseases_routes from './diseases_routes.js'
import patients_routes from './patients_routes.js'
import doctors_routes from './doctors_routes.js'
import auth_routes from './auth_routes.js'

const routes = Router();

routes.use('/diseases',diseases_routes);
routes.use('/patients',patients_routes);
routes.use('/doctors',doctors_routes);
routes.use('/auth',auth_routes);


export default routes;