const express=require('express');
const create_connection  =require('./DB/connection')


const app= express()
app.use(express.json())
create_connection();

port=27017

app.get('/',(req,res)=>{
    res.send('hi')
})

app.listen(port,()=>{
    console.log('running...');
   
    
})


