const GetData = require("../DataAccessLayer/GetData");

const getAdminData = async (req, res) => {
  const query = `select count(*) as user from user where role='admin' union all select count(*)  from user where role='default'`;

  try {
    const result = await GetData(query);

    res.status(200).send(result);
    return;
  } catch (error) {
    res.status(500).send({ message: "Something went wrong" });

    return;
  }
};

module.exports = getAdminData;
