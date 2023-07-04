import {sequelize} from '../database/db.js'
import { DataTypes } from 'sequelize'
import Diseases from './diseases_model.js'

const Patients = sequelize.define('patients', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull:false
    },
    patient_name:{
        type:DataTypes.STRING
    },
    patient_lastname:{
        type:DataTypes.STRING
    },
    n_identification:{
        type:DataTypes.STRING
    },
    age:{
        type:DataTypes.INTEGER,

    },
    phone:{
        type:DataTypes.STRING

    },
    address:{
        type:DataTypes.TEXT
    },
    gender:{
        type:DataTypes.STRING
    },
    date : {
        type:DataTypes.DATEONLY
    },
    disease_ids:{
        type:DataTypes.ARRAY(DataTypes.JSON),
        defaultValue:[]
    }
})

//realtions
Patients.belongsToMany(Diseases,{through:'PatientDisease'});
Diseases.belongsToMany(Patients,{through:"PatientDisease"})

export default Patients;