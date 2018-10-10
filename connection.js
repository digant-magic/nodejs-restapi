
//const express=require('express')
console.log('1')
const mysql = require('mysql');

//console.log("ww")

// First you need to create a connection to the db
const con = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'tiger',
  database:'mysql_db'
});

con.connect((err) => {
  if(err){
    console.log(err)
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

con.end((err) => {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});