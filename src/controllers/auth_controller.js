import Doctor from "../models/doctors_model.js";
import generatorJwt from '../utils/generatorJwt.js'
import bcrypt from 'bcrypt'


const login = async (req,res) =>{
   try {
    const {email, password} = req.body;
    
    const doctorFound = await Doctor.findOne({
        where:{
            email
        }
    } );
    

    if(!doctorFound){
        const error = new Error('Usuario no registrado en nuestra base de datos');
        return res.status(401).json({msg:error.message, error:true});

    }
    //compare the password sended and the save password
    const doctorPassword = await bcrypt.compare(password,doctorFound.password);
 
    if(!doctorPassword){
        const error = new Error('Contraseña Incorrecta');
        return res.status(401).json({msg:error.message, error:true});
    }
    
    
    const { id,name, lastname,rol, isAdmin} = doctorFound.dataValues;
    res.json({
        id,
        name,
        lastname,
        rol,
        isAdmin,
        token : generatorJwt(doctorFound)
    }).status(200);

   } catch (error) {
    console.log(error);
    res.json({msg:error.message}).status(500);
   }
// 
    
}

const getProfile = async (req,res) => {
    const { DoctorSession } = req;
    res.json({perfil: DoctorSession})
}   

export {
    login,
    getProfile
}