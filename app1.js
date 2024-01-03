

const express= require('express');
const app= express();

const adminRoutes= require('./routes/admin');
const shopRoutes=require('./routes/shop');

const bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not found</h1>');
})



app.listen(3000)