const http = require('http');
const userForm = require('./userForm');
const userDataSubmit = require('./userDataSubmit');
const server = http.createServer((req,resp)=>{
    resp.writeHead(200, { "Content-Type": "text/html" });
    if(req.url=='/'){
        userForm(req, resp);
        resp.end();
    }
    else if(req.url=='/submit'){
        userDataSubmit(req,resp);
    }
});
server.listen(4200);