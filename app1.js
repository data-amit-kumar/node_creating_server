const http= require('http');
const fs= require('fs');
const server= http.createServer((req,res)=>{
    const url= req.url;
    const method=req.method;
    if(url==="/"){
        const m= fs.readFileSync('message.txt','utf-8');
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write(`<body><p> ${m} </p><form action="/message" method="POST" ><input type "text" name="message"><button type="submit">Send</button></form></body>`);
        res.write('</html>');
        return res.end();
    }
    if(url==="/message" && method==="POST"){
        const body=[];
        req.on('data',(chunk)=>{
            body.push(chunk);
        });
        return req.on('end',()=>{
            const parsedBody= Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
            res.statusCode = 302;
        res.setHeader('Location' , '/');
        return res.end();
        });
        
        
    }

    res.write('<html>');
    res.write('<head><title>My First page</title></head>');
    res.write('<body><h1>Welcome Home</h1></body>');
    res.write('</html>');
    res.end();
})
server.listen(3000);