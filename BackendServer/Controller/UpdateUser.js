const insertData = require("../DataAccessLayer/InsertData");

const updateusers = async (req, res) => {
  if (req.body.id == "" || req.body.role === "") {
    res.status(400).send({ message: "Invalid data" });
    return;
  }
  const query = `UPDATE user SET role=? WHERE id=?`;
  try {
    const result = await insertData(query, [req.body.role, req.body.id]);
    res.status(200).send({ message: "Role updated successfully" });
  } catch (error) {
    res.status(500).send({ message: "Something went wrong" });
    return;
  }
};

module.exports = updateusers;
