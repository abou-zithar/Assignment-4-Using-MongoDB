const { model, models } = require("mongoose");
const userModel = require("../../../DB/models/user.model");

const addnewuser =async(req,res)=>{
    const{name,email,password,age}=req.body;
    res.json({massage:'Done'})

    const CreateUser=new userModel(name,email,password,age)
    const saveduser=await CreateUser.save()
}


const upDataUser =async(req,res)=>{
  try{
    const{id}=req.params;
    const {name}=req.body;

    const finduser= await userModel.findByIdAndUpdate({_id:id},{name},{new:true})
    res.json({massage:'updated',finduser})
  }catch(err){
    res.json({massage:'error',err})
  }
}


const getalluser =async(req,res)=>{
    try{
  
      const allusers= await userModel.find({}).select('-password')
      res.json({massage:'done',allusers})
    }catch(err){
      res.json({massage:'error',err})
    }
  }


const deleteuser =async(req,res)=>{
    try{
        const{id}=req.params;
      const deleteduser= await userModel.findByIdAndDelete({id})
      res.json({massage:'done',deleteduser})
    }catch(err){
      res.json({massage:'error',err})
    }
  }
module.exports={addnewuser,upDataUser,getalluser,deleteuser}