

const express= require('express');
const app= express();
const path=require('path');

const adminRoutes= require('./routes/admin');
const shopRoutes=require('./routes/shop');

const ec = require('./controllers/error');

const bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);

app.use(ec.geterr404);



app.listen(3000)