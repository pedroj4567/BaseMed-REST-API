import { Router } from "express";
import { addDisease,
        getAllDiseases,
        deleteDisease,
        updateDisease } from "../controllers/diseases_controller.js";
const route = Router();

route.post('/',addDisease);
route.get('/',getAllDiseases);
route.delete('/:id',deleteDisease);
route.put('/:id',updateDisease);

export default route;