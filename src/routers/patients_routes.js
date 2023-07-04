import Route from "express";
import {
  getPatients,
  createPatients,
  getPatientByCedula,
  updatePatient,
  deletePatient,
} from "../controllers/patients_controller.js";

const route = Route();

route.get("/", getPatients);
route.get("/:n_identification", getPatientByCedula);
route.post("/", createPatients);
route.put("/:id", updatePatient);
route.delete("/:id", deletePatient);

export default route;
