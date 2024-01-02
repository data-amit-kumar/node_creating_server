const http= require('http');

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

const server= http.createServer(app);
server.listen(3000);