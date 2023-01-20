const GetData = require("../DataAccessLayer/GetData");

const GetAttendance = async (req, res) => {
  const query = `SELECT * FROM attendance WHERE u_id=${req.query.id} order by date`;

  try {
    const result = await GetData(query);

    res.status(200).send(result);
    return;
  } catch (error) {
    res.status(500).send({ message: "Something went wrong" });

    return;
  }
};

module.exports = GetAttendance;
