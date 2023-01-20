
const addUserData=require('../Controller/Register');
const express=require('express');
const router=express.Router();




router.post('/',addUserData);



module.exports=router;