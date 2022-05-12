const mongoose = require('mongoose')


const create_connection=()=>{
   return mongoose.connect("mongodb://localhost:27017/MyDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })
    .then((result)=>console.log('connected.....'))
    .catch(err=>console.log(err));

}

module.exports= create_connection;