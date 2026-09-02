const queryString = require('querystring');
function userDataSubmit(req,resp){
    let dataBody = [];
    req.on('data',(chunk)=>{
        dataBody.push(chunk);
    });
    req.on('end',()=>{
        let data = Buffer.concat(dataBody).toString();
        let readableData = queryString.parse(data);
        console.log(readableData);
        resp.write("<h1>Data Get successfully</h1>");
        resp.end();
    })
}
module.exports = userDataSubmit;