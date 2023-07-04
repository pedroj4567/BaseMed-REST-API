import { Router } from "express";
import {addDoctor, getAllDoctors,deleteDoctor, updateDoctor, getDoctorByCedula} from '../controllers/doctors_controller.js'
const route  = Router();

//get all doctors
route.get('/',getAllDoctors);
//get doctor by cedula
route.get('/:cedula',getDoctorByCedula);
//add a new doctor 
route.post('/',addDoctor);
//update the data's doctor
route.put('/:id',updateDoctor);
//delete a doctor 
route.delete('/:id',deleteDoctor);

export default route;