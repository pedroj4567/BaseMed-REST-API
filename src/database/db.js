import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
//varibles de entornos
dotenv.config()

export const sequelize = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USER}`, `${process.env.DB_PASSWORD}`, {
  host: `${process.env.DB_HOST}`,
  dialect: 'postgres'
});

//development
// export const sequelize = new Sequelize(`${process.env.DB_NAME}`,`${process.env.DB_USER}`,`${process.env.DB_PASSWORD}`, {
//   host: `${process.env.DB_HOST}`,
//   dialect:'postgres',
//   logging:true
// });