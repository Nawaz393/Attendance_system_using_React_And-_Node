const pool = require("./DatabaseConnection");
const insertData = (query, data) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, con) => {
      if (err) {
        reject(err);
      }
      con.query(query, data, (err, result) => {
        con.release();
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  });
};


module.exports = insertData;

