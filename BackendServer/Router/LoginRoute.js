

const express=require('express');
const login=require('../Controller/Login');


const router=express.Router();


router.post("/",login);

module.exports=router;