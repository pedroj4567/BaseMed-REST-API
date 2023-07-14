import { Router } from "express";
import { getEntities,createEntities,deleteEntities } from '../controllers/entidad_controller.js'

const route = Router();

route.get('/',getEntities);


export default route