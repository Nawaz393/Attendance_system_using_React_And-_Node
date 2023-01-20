const GetData = require("../DataAccessLayer/GetData");

const GetAdminAttendance = async (req, res) => {
  const query = `SELECT a.id,a.status,a.date,u.name FROM attendance as a inner join user as u on (a.u_id=u.id)`;

  try {
    const result = await GetData(query);

    res.status(200).send(result);
    return;
  } catch (error) {
    res.status(500).send({ message: "Something went wrong" });

    return;
  }
};

module.exports = GetAdminAttendance;
