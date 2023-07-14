import app from "./app.js";
import {sequelize} from './database/db.js'
import Diseases from "./models/diseases_model.js";
import Entidad from "./models/entidad_model.js";
import diseases from "./database/data/disease.json" assert { type: "json" };
import entidades from "./database/data/entidades.json" assert { type: "json" };
import fs from 'fs'
async function main(){
const PORT = process.env.PORT || 3000;
    try {
        await sequelize.sync({});
        console.log('Conection has been established succeefully')
        // const data = JSON.parse(fs.readFile(`${__dirname}/database/data/disease.json`,'utf-8'))
        console.log('Data has been loaded successfully.');
        for (const diseaseData of diseases) {
            await Diseases.findOrCreate({
              where: { name: diseaseData.name },
              defaults: diseaseData
            });
          }

        for (const entidadData of entidades) {
        await Entidad.findOrCreate({
            where: { name: entidadData.name },
            defaults: entidadData
        });
        }
      
        app.listen(PORT, ()=>{
            console.log("server running in the port 3000")
        })

    } catch (e) {
        console.error(e)
    }
}
main();