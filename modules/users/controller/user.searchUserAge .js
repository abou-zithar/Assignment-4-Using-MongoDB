
const { model, models } = require("mongoose");
const userModel = require("../../../DB/models/user.model");



const searchbyage =async(req,res)=>{
    try{
        const{age}=req.body;
      const searchbyage= await userModel.findOne({_age:age} ).where(_age).gt(20).lt(40)
      res.json({massage:'updated',searchbyage})
    }catch(err){
      res.json({massage:'error',err})
    }
  }
module.exports={searchbyage}