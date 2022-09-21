const express = require("express");
const app = express()

app.get("/api",(req,res)=>{
    res.json({"users":["Country","last","night"]})
})

app.listen(5000,()=>{console.log("yoo")})