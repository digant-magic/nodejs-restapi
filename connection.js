
//const express=require('express')
console.log('1')
// const mysql = require('mysql');
const Connection=require("./connectionFile")

//console.log("ww")

// First you need to create a connection to the db
// const con = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'root',
//   password: 'tiger',
//   database:'mysql_db'
// });

// function Connection(){
//   return  mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: 'tiger',
//     database:'mysql_db'
//   });
// }
const con=Connection.Connection()

con.connect((err) => {
  if(err){
    console.log(err)
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
  queryString="SELECT * FROM express_mysql.users;"
con.query(queryString,(err,rows,Fields)=>{

  if(err)
  {console.log("connection is not established")}
  console.log(rows)
})
});

con.end((err) => {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});