const http = require('http');

const server= http.createServer((req,res)=>{
    console.log("Amit kumar");
    process.exit();
});

server.listen(4000)
