const insertData = require("../DataAccessLayer/InsertData");

const addattendance = async (req, res) => {
  if (req.body.id == "" || req.body.date === "" || req.body.status === "") {
    res.status(400).send({ message: "Invalid data" });
    return;
  }
  const query = `INSERT INTO attendance (status,date,u_id) VALUES (?,?,?)`;
  try {
    const result = await insertData(query, [
      req.body.status,
      req.body.date,
      req.body.id,
    ]);
    res.status(200).send({ message: "Attendance added successfully" });
  } catch (error) {
    res.status(500).send({ message: "Something went wrong" });
    return;
  }
};

module.exports = addattendance;
