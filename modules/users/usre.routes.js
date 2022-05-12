const { searchUserAge_name } = require('./controller/searchUserAge');
const { addnewuser, upDataUser, getalluser, deleteuser } = require('./controller/user.controllerofCRUD');
const { GetAllUserReversed } = require('./controller/user.GetAllUserReversed');
const { getuserbyid } = require('./controller/user.getuserbyid');
const { searchbyname } = require('./controller/user.searchbyname');
const { searchbyage } = require('./controller/user.searchUserAge ');

const userRoute=require('express').Router();

UserRouter.post('/addnewuser',addnewuser)
UserRouter.put('/updatauser/:id',upDataUser)



UserRouter.get('/getuserbyid/:id',getuserbyid)
UserRouter.get('/getallusers',getalluser)
UserRouter.get('/searchbyname',searchbyname)
UserRouter.get('/GetAllUserReversed',GetAllUserReversed)
UserRouter.get('/searchUserAge',searchbyage)
UserRouter.get('/searchUserAge&name',searchUserAge_name)
UserRouter.get('/searchUserAge&name2',searchUserAge_name2)


UserRouter.delete('/deleteuser/:id',deleteuser)

module.exports=userRoute