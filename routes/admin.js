const express= require('express');
const path= require('path');

const router= express.Router();
const pc = require('../controllers/products');

router.get('/add-product',pc.getAddProduct);

router.post('/product',pc.postAddProduct);

router.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','contact.html'));
});

module.exports= router;