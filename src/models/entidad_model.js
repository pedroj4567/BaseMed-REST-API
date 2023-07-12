import { sequelize } from "../database/db.js"; 
import { DataTypes } from "sequelize";

const Entidad = sequelize.define("entidad",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey:true
    },
    name : {
        type: DataTypes.STRING,
    },
    address : { 
        type: DataTypes.TEXT
    }
})

export default Entidad;