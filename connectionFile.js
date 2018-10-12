const mysql = require('mysql');


const pool=mysql.createPool({
    connectionLimit : 10,
       host: '127.0.0.1',
      user: 'root',
      password: 'tiger',
      database:'express_mysql'
})

function Connection(){
  return pool;
    // return  mysql.createConnection({
    //   host: '127.0.0.1',
    //   user: 'root',
    //   password: 'tiger',
    //   database:'express_mysql'
    // });
  }

  module.exports.Connection=Connection;