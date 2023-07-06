import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
//varibles de entornos
dotenv.config()

// export const sequelize = new Sequelize(
//   `${process.env.URI_POSTGRES}`,
//   {
//     dialect: "postgres",
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false
//       }
//     }
//   }
// );

export const sequelize = new Sequelize(
  `${process.env.URI_POSTGRES}`,
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);