const express=require('express');

const app=express();
const morgan=require('morgan')
const mysql=require('mysql')
app.use(morgan('combined'))

app.get("/",(req,res)=>{
console.log("responding");
    res.send("hello from root- :)");
})
//addding new root

app.get("/users",(req,res)=>{
    var user1={firstnme:'digant',lastname:"gupta"}
    var user2={firstnme:'yash',lastname:"gupta"}
    res.json([user1,user2])
//res.send("after nodemon ,it will autoupdate")
})

//fetching data from database
app.get("/users/:id",(req,res)=>{

    console.log("we are fetching id:"+req.params.id)
const connection=mysql.createConnection({
host:'localhost',
user:'root',
password: 'tiger',
database:'express_mysql'
})

const queryString="select * from users";

connection.query(queryString,(err,rows,fields)=>{
    if(err){
        console.log("failed to fetch ")
        res.sendStatus(500)
        res.end();
        return
    }
    console.log("data fetched successfully");
    res.json(rows);
})

    //res.end()
})

//local host 3000
app.listen(3000,()=>{
    console.log("server is up and listening on 3000...");
})