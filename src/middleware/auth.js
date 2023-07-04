import jwt from 'jsonwebtoken'
import Doctor from "../models/doctors_model.js";

//check the token
const checkToken = async (req,res,next) =>{
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token,process.env.SECRET_KEY);
            const findDoctor = await Doctor.findByPk(decoded.idUser,{
                attributes: ['name','lastname','rol','isAdmin']
            });
            
            const { dataValues } = findDoctor;

            req.DoctorSession = dataValues;
            
            return next();
        } catch (error) {
            const e = new Error('Token No valido');
            return res.status(403).json({msg:e.message});
        }
    }

    if(!token){
        const error = new Error('Token no valido o inexistente');
        res.status(403).json({msg: error.message});
    }

    next();
}


export default checkToken