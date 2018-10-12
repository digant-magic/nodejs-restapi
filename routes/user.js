//copied code from ap.js to user.js for creating a router

const express=require('express');
const router=express.Router()
router.get('/messages',(req,res)=>{
    console.log("router is used when /messsages is called")
    res.end()
})

module.exports.router=router