
const { model, models } = require("mongoose");
const userModel = require("../../../DB/models/user.model");



const searchbyname =async(req,res)=>{
    try{
        const{name}=req.body;
      const searchbyname= await userModel.findOne({_name:name})
      res.json({massage:'done',searchbyname})
    }catch(err){
      res.json({massage:'error',err})
    }
  }
module.exports={searchbyname}