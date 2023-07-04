import Doctor from "../models/doctors_model.js";
import generarContraseña from '../utils/generatePassword.js'
import bcrypt from 'bcrypt'

import {sendEmail} from '../utils/handlerEmail.js' 
//create a new doctor 
const addDoctor = async (req,res) => {
    
    try {
    
        const {
            name,
            lastname,
            n_identification,
            email,
            phone,
            gender,
            modulo,
            rol,
            isAdmin,
          } = req.body;

          const existe = await Doctor.findOne({
            where: {
              n_identification: n_identification,
            },
          });

          if(existe){
            return res.json({msg:'Doctor is registered'}).status(409);
          }
          // add default password
          const defultPassword = generarContraseña();
          const hashedPassword = await bcrypt.hash(defultPassword, 10);
          
       
          const newDoctor = await Doctor.create({
            name,
            lastname,
            n_identification,
            email,
            password : hashedPassword,
            phone,
            gender,
            modulo,
            rol,
            isAdmin,
          })
          
          sendEmail(newDoctor,defultPassword);
          
          res.json({msg:"User created successfully"}).status(201);

          
      
          
    } catch (error) {
      res.json({msg:error.message}).status(500);
    }
   

    
}

const getAllDoctors = async (req,res) => {
    try { 
      const doctors = await Doctor.findAll();

      if(doctors == null){
        return res.json({msg:"there aren't doctors registered"}).status(200);
      }

      res.json({doctors}).status(200);

    } catch (error) {
      res.json({"msg": error.message, error:true}).status(500)
}
}

const getDoctorByCedula = async (req,res) =>{
 
    try {
      const { cedula } = req.params;
    
      const doctor = await Doctor.findOne({
        where: {
          n_identification: cedula,
        },
      });
  
      if (doctor == null) {
        res.json({ msg: "Doctor not found" }).status(404);
        return;
      }
  
      return res.json( doctor ).status(200);
    } catch (error) {
      res.json({ e: error.message, error: true }).status(500);
  }
  
}

const deleteDoctor = async (req,res) =>{
    try {
        const {id} = req.params;
        const doctor = await Doctor.findByPk(id);

        if (doctor == null){
            res.json({msg:"Doctor not found"}).status(404);
            return;
        }

        const doctorDelete = await Doctor.destroy({
            where : {
                id
            }
        }); 

        return res.json({"msg":"Doctor deleted", doctor:doctorDelete})
    } catch (error) {
        res.json({"msg": error.message, error:true}).status(500)
    }
}

const updateDoctor = async (req,res) =>{
  try {
    //search the patient
    const { id } = req.params;
    //if not exits, return patient not registered
    let doctor = await Doctor.findByPk(id);
    if (doctor == null) {
      res.json({ msg: "Doctor not registered", error: true }).status(404);
      return;
    }

    await Doctor.update(req.body, { where: { id: id } });

    res.json({ msg: "Updated doctor", doctor }).status(200);
  } catch (error) {
    res.json({ e: error.message, error: true }).status(500);
  }
}


export {
    addDoctor,
    getAllDoctors,
    deleteDoctor,
    updateDoctor,
    getDoctorByCedula
 }