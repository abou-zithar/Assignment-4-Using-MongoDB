
const { model, models } = require("mongoose");
const userModel = require("../../../DB/models/user.model");



const getuserbyid =async(req,res)=>{
    try{
        const{id}=req.params;
      const getuserbyid= await userModel.findById({id})
      res.json({massage:'done',getuserbyid})
    }catch(err){
      res.json({massage:'error',err})
    }
  }
module.exports={getuserbyid}