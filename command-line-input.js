const http = require('http');
const arg = process.argv;
const port = arg[2];
const server = http.createServer((req,resp)=>{
    resp.write("hello shivam"+arg);
    resp.end();
});
server.listen(port);