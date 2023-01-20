const express = require("express");
const getAdminData = require("../Controller/GetAdminData");
const AdminAuth = require("../middleware/AdminAuth");
const router = express.Router();
router.use(AdminAuth);

router.get("/", getAdminData);

module.exports = router;
