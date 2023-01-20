const insertData = require("../DataAccessLayer/InsertData");
const registerSchema = require("./validationschema/RegisterSchema");
const bcrypt = require("bcrypt");

const addUserData = async (req, res) => {
  const { error, value } = registerSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    res.status(400).send({ message: error.message });
    return;
  }
  const hash = await bcrypt.hash(req.body.password, 10);
  const data = { ...value, password: hash };
  const query = `INSERT INTO user (name,email,password,role) VALUES (?,?,?,'default')`;
  try {
    const result = await insertData(query, [
      data.name,
      data.email,
      data.password,
    ]);
    res.status(200).send({ message: "Account register successfully" });
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      res.status(500).send({ message: "Email already exists" });
      return;
    }
    res.status(500).send({ message: "Something went wrong" });
    return;
  }
};

module.exports = addUserData;
