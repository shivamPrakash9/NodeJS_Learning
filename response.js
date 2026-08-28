const http = require('http');
var age = 23;
const server = http.createServer((req,resp)=>{
    resp.setHeader("Content-Type","text/html");
    resp.write(`
        <html>
        <head>
        <title>This is response</title>
        </head>
        <body>
        <h2>Hello Shivam</h2>
        <h3>`+age+`</h3>
        </body>
        </html>
        `)
    resp.end();
});

server.listen(4800);