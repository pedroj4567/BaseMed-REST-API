import Patients from "../models/patients_model.js";

//Get all patients
const getPatients = async (req, res) => {
  try {
    const patients = await Patients.findAll();
    if (patients.length == 0 || patients == null) {
      return res.json({ msg: "There aren't patients" }).status(404);
    }
    res.json(patients).status(200);
  } catch (error) {
    res.json({ e: error.message, error: true }).status(500);
  }
};

//Create a patient
const createPatients = async (req, res) => {

  try {
    const {
      patient_name,
      patient_lastname,
      n_identification, 
      phone,
      age,
      address,
      gender,
      date,
      disease_ids
    } = req.body;
    
    //validation
    const existe = await Patients.findOne({
      where: {
        n_identification: n_identification,
      },
    });

    if (existe) {
      res.json({ msg: "Patient registered", existe}).status(409);
      return;
    }
    

    const patient = await Patients.create({
      patient_name,
      patient_lastname,
      n_identification,
      age,
      phone,
      address,
      gender,
      date,
      disease_ids,
    });

    res
      .json({
        msg: "Patient created successfully",
        dataCreated: patient,
      })
      .status(201);
  } catch (error) {
    res.json({ e: error.message, error: true }).status(500);
  }
};

//Get patient by CEDULA
const getPatientByCedula = async (req, res) => {
  try {
    const { n_identification } = req.params;
    const patient = await Patients.findOne({
      where: {
        n_identification: n_identification,
      },
    });

    if (patient == null) {
      return res.json({ msg: "patient not found", error:true }).status(404);
      
    }

    return res.json( patient ).status(200);
  } catch (error) {
    res.json({ e: error.message, error: true }).status(500);
  }
};

//Update data of patienti
const updatePatient = async (req, res) => {
  try {
    //search the patient
    const { id } = req.params;
    //if not exits, return patient not registered
    let patient = await Patients.findByPk(id);
    if (patient == null) {
      res.json({ msg: "Patient not registered", error: true }).status(404);
      return;
    }

    await patient.update(req.body, { where: { id: id } });

    res.json({ msg: "Updated patient", patient }).status(200);
  } catch (error) {
    res.json({ e: error.message, error: true }).status(500);
  }
};

//Delete patient 
const deletePatient = async(req,res) => {
    try {
        const {id} = req.params;
        const patient = await Patients.findByPk(id);

        if (patient == null){
            res.json({msg:"Patient not registered"}).status(404);
            return;
        }

        //elimina el paciente
        await Patients.destroy({
            where : {
                id,
            }
        });

        res.json({msg:'Patient deleted'}).status(200)
    } catch (error) {
        res.json({err:error.message,error:true})
    }
}


export { 
         getPatients,
         createPatients, 
         getPatientByCedula, 
         updatePatient,
         deletePatient
        };
        
