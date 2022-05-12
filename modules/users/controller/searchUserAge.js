
const { model, models } = require("mongoose");
const userModel = require("../../../DB/models/user.model");



const searchUserAge_name =async(req,res)=>{
    try{
        const{age,name}=req.body;
      const searchUserAge_name= await userModel.findOne({_age:age} ).where(age).lt(30).where(name.first).equals('A')
      res.json({massage:'updated',searchUserAge_name})
    }catch(err){
      res.json({massage:'error',err})
    }
  }
  const searchUserAge_name2 =async(req,res)=>{
    try{
        const{age,name}=req.body;
      const searchUserAge_name2= await userModel.findOne({_age:age} ).where(age).gt(50).where(name.last).equals('b')
      res.json({massage:'updated',searchUserAge_name2})
    }catch(err){
      res.json({massage:'error',err})
    }
  }


  const searchUserAge_name3 =async(req,res)=>{
    try{
        const{age,name}=req.body;
      const searchUserAge_name3= await userModel.findOne({_age:age} ).where(age).lt(25).gt(20).where(name).equals('r')
      res.json({massage:'updated',searchUserAge_name3})
    }catch(err){
      res.json({massage:'error',err})
    }
  }



module.exports={searchUserAge_name,searchUserAge_name2,searchUserAge_name3}