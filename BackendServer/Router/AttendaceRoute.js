const express=require("express")
const addattendance=require("../Controller/AddAttendance")
const GetAttendance=require("../Controller/GetAttendance")
const RequireAuth=require("../middleware/requireAuth")
const router=express.Router()
router.use(RequireAuth)
router.post("/",addattendance);
router.get("/",GetAttendance);



module.exports=router;
