const mysql=require('mysql');
const pool=mysql.createPool({
host:'localhost',
port:`3306`,
user:'root',
password:'root',
database:'eziline',
connectionLimit:10,
})


module.exports = pool;