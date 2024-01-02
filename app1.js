

const express= require('express');
const app= express();

app.use((req,res,next)=>{
    console.log("Hi there")
    next();
});

app.use((req,res,next)=>{
    console.log("Hi Again");
    res.send("<h1>Hello Brother</h1>");
});

app.listen(3000)