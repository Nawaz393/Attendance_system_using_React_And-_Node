const express=require("express")

const AdminAuth=require("../middleware/AdminAuth")

const getusers=require("../Controller/Getuser")
const updateusers=require("../Controller/UpdateUser")

const router=express.Router()
router.use(AdminAuth)
router.get("/",getusers);
router.put("/",updateusers);
module.exports=router;
