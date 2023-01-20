
const express=require("express")
const GetAdminAttendance=require("../Controller/GetAdminAttendance")
const updateAttendance=require("../Controller/UpdateAttendance")
const AdminAuth=require("../middleware/AdminAuth")
const router=express.Router()
router.use(AdminAuth)

router.get("/",GetAdminAttendance)
router.put("/",updateAttendance)
module.exports=router