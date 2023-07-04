import { sequelize } from "../database/db.js"; 
import { DataTypes } from "sequelize"; 

const Doctor = sequelize.define('doctors',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey:true
    },
    name : {
        type: DataTypes.STRING,
    },
    lastname : {
        type: DataTypes.STRING,
    },
    
    n_identification : {
        type : DataTypes.STRING
    },

    email : {
        type: DataTypes.STRING
    },

    password : {
        type: DataTypes.STRING,
        defaultValue: null
    },

    phone: {
        type:DataTypes.STRING
    },

    gender : {
        type: DataTypes.STRING,
    },

    modulo : {
        type: DataTypes.ARRAY(DataTypes.JSON),
        defaultValue : []
    },

    rol : {
        type: DataTypes.ARRAY(DataTypes.JSON),
        defaultValue : [{id:2, name:'doctor'}]
    },
    isAdmin : {
        type: DataTypes.BOOLEAN,
        defaultValue : false
    }

})

export default Doctor;
