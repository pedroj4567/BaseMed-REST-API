import {sequelize} from '../database/db.js'
import { DataTypes } from 'sequelize' 

const Diseases = sequelize.define('diseases', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    name:{
        type: DataTypes.STRING
    },
},{
    timestamps:true
});

export default Diseases;