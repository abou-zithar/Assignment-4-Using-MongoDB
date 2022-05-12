const mongoose = require('mongoose')


const userSchema =new mongoose.Schema('user',{
    name:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        
    },
    password:{
        type:String,
        required:true,
        
    },
    age:{
        type:Int16Array,
        required:true,
        
    },  isEmailComfirmed:Boolean
        
    
})



const userModel= mongoose.model('user',userSchema)


module.exports=userModel