const path= require('path');

exports.geterr404 = (req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'../','views','PageError.html'));
};