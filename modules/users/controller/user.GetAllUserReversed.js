
const { model, models } = require("mongoose");
const userModel = require("../../../DB/models/user.model");



const GetAllUserReversed =async(req,res)=>{
    try{
      
      const GetAllUserReversed=  (await userModel.find()).reverse
      res.json({massage:'done',GetAllUserReversed})
    }catch(err){
      res.json({massage:'error',err})
    }
  }
module.exports={GetAllUserReversed}