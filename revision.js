const http = require("http"); 
// http is a module to create server

const arg = process.argv;
const port = arg[2];
// reading data form command line input and storing it in port variable

const fs = require('fs');
// fs stands for file system use to read and write file

const queryString = require('querystring');
const { buffer } = require("stream/consumers");

const server = http.createServer((req,resp)=>{
    // opening home page (html page through fs module)
    if(req.url=='/'){
        fs.readFile('html/web.html','utf-8',(err,data)=>{
            if(err){
                resp.writeHead(500,{"Content-Type":"text/plain"});
                resp.write("Error from server side");
                resp.end();
            }
            else{
                resp.writeHead(200,{"Content-Type":"text/html"});
                resp.write(data);
                resp.end();
            }
        });
    }
    else if(req.url=='/form'){
        fs.readFile('html/form.html', 'utf-8', (err,data)=>{
            if(err){
                resp.writeHead(500,{"content-type":"text/plain"});
                resp.write("unable to open file");
                resp.end;
            }
            else{
                resp.writeHead(200,{"content-type":"text/html"});
                resp.write(data);
                resp.end();
            }
        })
    }
    else if(req.url=='/submit'){
        var databody=[];
        req.on('data',(chunk)=>{
            databody.push(chunk);
        });
        req.on('end',()=>{
            let rawData = Buffer.concat(databody).toString();
            let readableData = queryString.parse(rawData);
            console.log(readableData);
        })
        resp.write("<h1>Data submitted</h1>");
        resp.end();
    }
    else{
        resp.write("<h1>Other Page</h1>");
        resp.end();
    }
});
server.listen(port);
