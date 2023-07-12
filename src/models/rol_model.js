import { sequelize } from "../database/db.js"; 
import { DataTypes } from "sequelize";

const Rol = sequelize.define("rol",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey:true
    },

    name : {
        type: DataTypes.STRING,
    },
})

export default Rol;