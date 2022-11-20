import { readFile } from "fs";
import { createServer } from "http";

const server = createServer((req, res) => {
    let path = './';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.writeHead(200, { "Content-Type": "text/html" });
            break;
        case '/about':
            path += 'about.html';
            res.writeHead(200, { "Content-Type": "text/html" });
            break;
        case '/about-me':
            res.writeHead(301, {'Location': '/about'});
            break;
        default:
            path += '404.html';
            res.writeHead(404, { "Content-Type": "text/html" });
            break;    
    };

  readFile(path, (err, data) => {
    if (err) {
      console.error(err);
      res.end();
    }
    // res.write(data);
    res.end(data);
  });
}).listen(8080, "localhost", () => {
  console.log(`listening for requests on port 8080`);
});
