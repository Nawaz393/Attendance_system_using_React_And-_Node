const pool = require("./DatabaseConnection");
const getData = (query) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, con) => {
      if (err) {
        reject(err);
      }
      con.query(query,(err,result) => {
        con.release();
        if (err) {
          reject(err);
        }

        resolve(result);
      });
    });
  });
};


module.exports = getData;
