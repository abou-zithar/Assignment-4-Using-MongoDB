const MySql=require('../../../DB/connection')



const searchByName=(req,res)=>{
    let{name}=req.body;
    MySql.execute(`SELECT * FROM users WHERE name='${name}'`,(err,results)=>{
        if(err){
            res.json({massage:'query err',err})

        }
        if(results.length){
            res.json({massage:'done',data:results})
        }else{
            res.json({massage:'no results to display'})
        }
    })
}
module.exports=searchByName