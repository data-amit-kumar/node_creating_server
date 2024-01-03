

const express= require('express');
const app= express();
const bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({extended: false}));

app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">ADD PRODUCT</button></form>')
});

app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

app.use((req,res,next)=>{
    res.send("<h1>Hello Brother</h1>");
});

app.listen(3000)