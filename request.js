const http = require('http');

const server = http.createServer((req,resp)=>{
    // resp.setHeader("Content-Type","");
    if(req.url=='/'){
        resp.write("<h1>Home Page</h1>");
    }
    else if (req.url=="/login") {
        resp.write("<h1>Login page</h1>");
    } else {
        resp.write("<h1>Other Page</h1>");
    }
    resp.write("Hello shivam");
    resp.end();
});
server.listen(5600);