import app from "./app.js";
import {sequelize} from './database/db.js'
async function main(){
const PORT = process.env.PORT || 3000;
    try {
        await sequelize.sync({});
        console.log('Conection has been established succeefully')
        app.listen(PORT, ()=>{
            console.log("server running in the port 3000")
        })

    } catch (e) {
        console.error(e)
    }
}
main();