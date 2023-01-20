const GetData = require("../DataAccessLayer/GetData");

const getusers = async (req, res) => {
  const query = `SELECT id,name,role FROM user`;

  try {
    const result = await GetData(query);
    res.status(200).send(result);
    return;
  } catch (error) {
    res.status(500).send({ message: "Something went wrong" });
    return;
  }
};

module.exports = getusers;
