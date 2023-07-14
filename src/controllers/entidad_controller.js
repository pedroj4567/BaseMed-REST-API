import Entidad from "../models/entidad_model.js";

async function getEntities(req,res){

    try {
        const entidades = await Entidad.findAll();
        console.log(entidades);
        if (entidades == null){
            res.status(404).json({msg : "No Hay Registro"})
            return;
        }

        res.status(200).json({entidades})
        
    } catch (error) {
       return res.status(500).json({msg:error.message, erro:true})
    }
}

async function createEntities(req,res){

    try {
        const { name } = req.body;
        const entidad = await Entidad.findOne({
            where:{
                name : name
            }
        })


        if(entidad){
            res.status(200).json({msg:"Entidad Registrada"})
            
        }


    }catch (error) {
        return res.status(500).json({msg:error.message, erro:true})
    }
}

async function deleteEntities(req,res){

    try {
        const { id } = req.body;
        const entidad = await Entidad.findOne({
            where:{
                id: id
            }
        })


        if(!entidad){
            res.status(404).json({msg:"Entidad Registrada"})
            
        }


    }catch (error) {
        return res.status(500).json({msg:error.message, erro:true})
    }
}





export {
    
    getEntities,
    createEntities,
    deleteEntities,

}
