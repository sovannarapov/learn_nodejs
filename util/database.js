const mysql = new require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node-complete',
  password: 'admin168'
});

module.exports = pool.promise();