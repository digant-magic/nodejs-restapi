const express=require('express');
const app=express();
const morgan=require('morgan')
const mysql=require('mysql')
const Connection=require("./connectionFile")
const bodyParser=require("body-parser")


// const connection=mysql.createConnection({
// host:'localhost',
// user:'root',
// password: 'tiger',
// database:'express_mysql'
// })

app.use(morgan('combined'))
app.use(express.static("./Public"))
app.use(bodyParser.urlencoded({extended: false}))
//different different routes----------------


// intro ducing router
const router=require("./routes/user.js")
app.use(router.router)
app.get("/",(req,res)=>{
console.log("responding");
    res.send("hello from root- :)");
})

//addding new root----------------

app.get("/users",(req,res)=>{
    var user1={firstname:'digant',lastname:"gupta"}
    var user2={firstname:'yash',lastname:"gupta"}
    res.json([user1,user2])
//res.send("after nodemon ,it will autoupdate")
})

//fetching data from database
app.get("/users/:id",(req,res)=>{
 console.log("we are fetching id:"+req.params.id)

const Con=Connection.Connection();
userID=req.params.id;
const queryString="select * from users where id=?";
Con.query(queryString,[userID],(err,rows,fields)=>{
    if(err){
        console.log("failed to fetch ")
        res.sendStatus(500)
        res.end();
        return
    }
    console.log("data fetched successfully");
    res.json(rows);
    
   // Con.end();
    //res.end()
})

    //res.end()
})

//route to show all users
app.get("/user-show",(req,res)=>{
    //res.send("getting the whole result of users")
    const Con=Connection.Connection();

const queryString="select * from users";
Con.query(queryString,(err,rows,fields)=>{
    if(err){
        console.log("failed to fetch ")
        res.sendStatus(500)
        //res.end();
        return
    }
    console.log("data fetched successfully");
    res.json(rows);
    
    //console.log(Con);
    //Con.end()
})
//res.end();
})
//handling post request

app.post("/user_create",(req,res)=>{
    console.log("adding new user")
    console.log("first name="+req.body.create_first_name)
    console.log("last name="+req.body.create_last_name)
    //res.end()
 const firstname=req.body.create_first_name
 const lastname=req.body.create_last_name
    const con=Connection.Connection();
    const queryString="insert into users (first_name,last_name) values(?,?)";
    con.query(queryString,[firstname,lastname],(err,rows,fields)=>{

        if(err)
        {
            console.log("unable to load" +err)
            res.sendStatus(500)
            return;
        }
        console.log("the given name added")
        res.end();
    })
    
})

//route for delete

app.delete("/delete/:id",(req,res)=>{
    console.log("we are deleting id:"+req.params.id)
    const con =Connection.Connection();
    
     id=req.params.id
    queryString="delete from users where id=?"
    con.query(queryString,[id],(err,rows,fields)=>{
        if(err)
        {

            console.log("unable to load" +err)
            res.sendStatus(500)
            return;
        }
        console.log("the given id"+id +"is deleted")
        res.end();
    })

})
//local host 3000
app.listen(3000,()=>{
    console.log("server is up and listening on 3000...");
})