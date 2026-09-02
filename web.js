const http = require('http');

const fs = require('fs');
const server = http.createServer((req,resp)=>{
    fs.readFile('html/web.html','utf-8',(err,data)=>{
        if(err){
            resp.writeHead(500,{"content-type":'text/plain'});
            resp.write('internal server error');
            resp.end();
            return;
        }
        else{
            resp.writeHead(200,{"content-type":'text/html'});
            resp.write(data);
            resp.end();
        }
    })
});

server.listen(3200);