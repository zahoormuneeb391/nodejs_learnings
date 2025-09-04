import { createServer } from 'http';
import fs from 'fs';
import path from 'path';
let port = 3000;


async function serveFile(req, res, filePath, contentType) {
    try {
        const data = await fs.promises.readFile(filePath, 'utf-8');
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    } catch (err) {
        res.writeHead(404, { 'Content-Type': contentType });
        res.end('Page not found');
    }
    console.log("Request served for " + filePath);
    console.log("req.url: " + req.url);
    console.log("req.method: " + req.method);

}

const server = createServer(async (req, res) => {
    if (req.method == "GET") {
        if (req.url == "/") {
            serveFile(req, res, path.join('public', 'index.html'), 'text/html');
        } else if (req.url == "/style.css") {
            serveFile(req, res, path.join('public', 'style.css'), 'text/css');
        } else if (req.url == "/muneeb.html") {
            serveFile(req, res, path.join('public', 'muneeb.html'), 'text/html');
        } else {
            serveFile(req, res, path.join('public', '404.html'), 'text/html');
        }
    }
})

server.listen(port, () => {
    console.log("Server is running on port " + port);
})