const http = require('http');

const userData = [
    {
        name:"shivam",
        age: 20,
        email:"shivam@test.com"
    },
    {
        name: "vivek",
        age: 24,
        email: "vivek@test.com"
    },
    {
        name: "aniket",
        age: 23,
        email: "aniket@test.com"
    }
]
const server = http.createServer((req,resp)=>{
    resp.setHeader("Content-Type","application/json");
    resp.write(JSON.stringify(userData));
    resp.end();
});
server.listen(4800);