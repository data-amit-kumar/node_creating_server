const path= require('path');
const express= require('express');
const router= express.Router();

const pc= require('../controllers/products');

router.get('/',pc.getAddProduct);

module.exports=router;