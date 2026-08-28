const http = require('http');
http.createServer((req, resp)=>{
    resp.write("<h1>This is my first server</h1>");
    resp.end("hello this is Shivam");
}).listen(4800);
 
http.createServer((req, resp) => {
    resp.write("<h1>This is my first server</h1>");
    resp.end("hello this is Shivam");
}).listen(4850);