const http = require('http');
const fs = require('fs');
const queryString = require('querystring');
const server = http.createServer((req,resp)=>{
    if(req.url=='/'){

        fs.readFile("html/form.html",'utf-8',(err,data)=>{
            if(err){
                resp.writeHead(500,{"Content-Type":'text/plain'});
                resp.write("server error");
                resp.end();
                return;
            }
            else{
                resp.writeHead(200,{"Content-Type":'text/html'});
                resp.write(data);
                resp.end();
            }
        })
    }
    else if (req.url == '/submit') {

        let dataBody = [];

        req.on('data', (chunk) => {
            dataBody.push(chunk);
        });

        req.on('end', () => {

            let rowData = Buffer.concat(dataBody).toString();

            let readableData = queryString.parse(rowData);

            console.log("Received data:");
            console.log(readableData);

            let dataString = "My name is " +
                readableData.username +
                " Password is " +
                readableData.password;

            console.log("Data String:");
            console.log(dataString);

            fs.writeFileSync("text/"+readableData.username+".txt",dataString);

            resp.writeHead(200, {
                "Content-Type": "text/html"
            });

            resp.write("<h1>Data submitted</h1>");
            resp.write("<p>" + dataString + "</p>");

            resp.end();
        });
    }
    else{
        resp.end("not found");
    }
});
server.listen(3200);