const http = require('http');
const fs = require('fs');
const server = http.createServer((req,resp)=>{

    let collectHeaderData = fs.readFileSync('html/header.html');
    let collectFooterData = fs.readFileSync('html/footer.html');

    let file = '/home';
    if(req.url!='/'){
        file=req.url;
    }
    
    if(req.url!='/style.css'){
        fs.readFile("html"+file+".html", 'utf-8', (err, data) => {
            if (err) {
                resp.writeHead(500, { "content-type": 'text/plain' });
                resp.end('Server error');
                return false;
            }
            // resp.writeHead(200, { "content-type": 'text/html' });
            resp.write(collectHeaderData+""+data+""+collectFooterData);
            resp.end();
        })
    }
    else if(req.url=='/style.css'){
        fs.readFile("html/style.css", 'utf-8', (err, data) => {
            if (err) {
                resp.writeHead(500, { "content-type": 'text/plain' });
                resp.end('css not found');
                return false;
            }
            resp.writeHead(200, { "content-type": 'text/css' });
            // resp.write(data);
            resp.end(data);
        })
    }
    
});
server.listen(3200);