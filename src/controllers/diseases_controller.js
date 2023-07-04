import Diseases from "../models/diseases_model.js";

//create a disease 
const addDisease = async (req,res) =>{
    try {
        const {name} = req.body;
        //it's registered the disease
        const existe = await Diseases.findOne({
            where : {
                name : name
            }
        });

       
    if (existe) {
        res.json({ msg: "disease registered", existe}).status(409);
        return;
      }
        const newDisease = await Diseases.create({name});
        res
        .json({
          msg: "Disease created successfully",
          dataCreated: newDisease,
        })
        .status(201);
        
    } catch (error) {
        res.json({"msg": error.message, error:true}).status(500)
    }
}

//list all diseases 
const getAllDiseases = async (req,res) =>{
    try {
        const diseases = await Diseases.findAll();

        if (diseases < 1 || diseases == null ) {
            res.json({msg:"There are not diseases charged"}).status(200);
            return;
        }

        res.json(diseases).status(200);

    } catch (error) {
        res.json({"msg": error.message, error:true}).status(500);
    }
}   

//delete disease
const deleteDisease = async (req,res) =>{
    try {
        const {id} = req.params;
        const disease = await Diseases.findByPk(id);

        if (disease == null){
            res.json({msg:"Disease not found"}).status(404);
            return;
        }

        const diseaseDelete = await Diseases.destroy({
            where : {
                id
            }
        }); 

        return res.json({"msg":"Disease deleted", disease:diseaseDelete})
    } catch (error) {
        res.json({"msg": error.message, error:true}).status(500)
    }
}

//update any  disease
const updateDisease = async (req,res) =>{
    try {
           //search the patient
        const { id } = req.params;
        //if not exits, return disease not registered
        let disease = await Diseases.findByPk(id);
        if (disease == null) {
            res.json({ msg: "Disease not found", error: true }).status(404);
            return;
        }

        await Diseases.update(req.body, {where : {id : id}})

        res.json({ msg: "Updated disease", disease }).status(200);


    } catch (error) {
        res.json({"msg": error.message, error:true}).status(500);
    }
}


export {
    addDisease,
    getAllDiseases,
    deleteDisease,
    updateDisease

}