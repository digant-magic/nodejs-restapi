const express=require('express');
const app=express();
const morgan=require('morgan')
const mysql=require('mysql')
const Connection=require("./connectionFile")
const bodyParser=require("body-parser")

app.use(morgan('combined'))
app.use(express.static("./Public"))
app.use(bodyParser.urlencoded({extended: true}))

app.post("/user_create",(req,res)=>{
    console.log("adding new user")
    console.log("first name="+res.body.create_first_name)
    console.log("first name="+res.body.create_last_name)
    //res.end()
 const firstname=res.body.create_first_name
 const lastname=res.body.create_last_name
    const con=Connection.Connection();
    const queryString="insert into users values(?,?,?)"
    con.query(queryString,[5,firstname,lastname],(err,rows,fields)=>{

        if(err)
        {
            console.log("unable to load")
            sendStatus(400)
            return;
        }
        console.log("the given name added")
    })
})



app.listen(3000,()=>{
    console.log("server is up and listening on 3000...");
})