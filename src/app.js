import express  from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from "morgan";
import routes from './routers/index.js'
const app = express();

//variables de entorno
dotenv.config();
//middleware
app.use(express.json());
app.use(morgan('tiny'));

//cors
const whiteList = [`${process.env.FRONTEND_HOST}`];

const corsOption = {
    origin : (origin,callback)=>{
        if(whiteList.indexOf !== -1){
            callback(null,true);
        }else{
            callback(new Error());
        }
    }
}
//cors
app.use(cors(corsOption))

//routes
app.use('/api',routes);



export default app;