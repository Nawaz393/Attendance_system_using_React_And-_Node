const getData = require("../DataAccessLayer/GetData");
const loginSchema = require("./validationschema/LoginSchema");
const becrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const login = async (req, res) => {
  const { error, value } = loginSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    res.status(400).send({ message: error.message });
    return;
  }
  const query = `SELECT * FROM user WHERE email='${value.email}'`;
  try {
    const result = await getData(query);

    if (result.length === 0) {
      res.status(400).send({ message: "Invalid email" });
      return;
    }
    const user = result[0];
    if (result.length > 0) {
      const isMatch = await becrypt.compare(value.password, user.password);
      if (!isMatch) {
        res.status(400).send({ message: "Invalid password" });
        return;
      }
    }
    const token = jwt.sign({ id: user.id, role: user.role }, "eziline", {
      expiresIn: "3d",
    });

    res.status(200).send({
      message: "Login successfully",
      user: {
        id: user.id,
        role: user.role,
        email: user.email,
        token: token,
      },
    });
  } catch (error) {
    res.status(500).send({ message: "Something went wrong" });
    return;
  }
};

module.exports = login;
