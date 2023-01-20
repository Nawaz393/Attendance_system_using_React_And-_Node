const insertData = require("../DataAccessLayer/InsertData");
const updateAttendance = async (req, res) => {
  if (req.body.id == "" || req.body.date === "" || req.body.status === "") {
    res.status(400).send({ message: "Invalid data" });
    return;
  }
  const query = `UPDATE attendance SET status=? WHERE id=? AND date=?`;
  try {
    const result = await insertData(query, [
      req.body.status,
      req.body.id,
      req.body.date,
    ]);
    if (result.affectedRows === 0)
      res.status(200).send({ message: "Attendance updated successfully" });
  } catch (error) {
    res.status(500).send({ message: "Something went wrong" });
    return;
  }
};

module.exports = updateAttendance;
