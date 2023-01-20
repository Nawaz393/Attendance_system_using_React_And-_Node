const jwt = require("jsonwebtoken");
const GetData = require("../DataAccessLayer/GetData");
const Admin = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({
      message: "You are not authorized to access this route",
    });
  }

  const token = authorization.split(" ")[1];
  if (token) {
    jwt.verify(token, "eziline", async (err, decodedToken) => {
      if (err) {
        res.json({
          message: err.message,
        });
      } else {
        const { id, role } = decodedToken;

        if (role !== "admin") {
          res.status(401).json({
            message: "You are not authorized to access this  admin route",
          });
          return;
        }
        const query = `select * from user where id =${id}`;

        const result = await GetData(query);

        if (result.length < 0) {
          res.status(401).json({
            message: "You are not authorized to access this route",
          });
        }

        next();
      }
    });
  } else {
    res.json({
      message: "You are not authorized to access this route",
    });
  }
};

module.exports = Admin;
