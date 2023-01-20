const express = require("express");
const registerRoute = require("./Router/RegisterRoute");
const loginRoute = require("./Router/LoginRoute");
const attendanceroute = require("./Router/AttendaceRoute");
const adminAttendance = require("./Router/AdminAttRoute");
const userRoute = require("./Router/UserRoute");
const AdminRoute = require("./Router/AdminRoute");
const app = express();

// const cors=require("cors")
// app.use(cors())
app.use(express.json());
app.use("/register", registerRoute);
app.use("/login", loginRoute);
app.use("/attendance", attendanceroute);
app.use("/adminAttendance", adminAttendance);
app.use("/users", userRoute);
app.use("/admin", AdminRoute);

app.listen(5000, () => {});
