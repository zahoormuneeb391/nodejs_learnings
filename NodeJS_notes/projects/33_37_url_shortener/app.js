import { createServer } from 'http';
import fs from 'fs';
import path from 'path';
import { parse } from "querystring"
import chalk from 'chalk';
import { json } from 'stream/consumers';

let port = 3000;

//! Server File Function :)
async function serveFile(req, res, filePath, contentType, statusCode) {
    try {
        const data = await fs.promises.readFile(filePath, 'utf-8');
        res.writeHead(statusCode, { 'Content-Type': contentType });
        res.end(data);
    } catch (err) {
        res.writeHead(statusCode, { 'Content-Type': contentType });
        res.end('Page not found');
    }

}


//! UpdateLogs Funiton
const updateLogs = async (req) => {
    let now = new Date();
    let logObj = {
        requestURL: req.url,
        requestMethod: req.method,
        requsetTime: now.toLocaleTimeString(),
        requsetDate: now.toLocaleDateString(),
    }
    let filename = "logs.json";
    let filePath = path.join("data", filename);


    try {
        let logs = [];
        if (fs.existsSync(filePath)) {
            let data = await fs.promises.readFile(filePath, "utf-8");
            if (data) {

                logs = await JSON.parse(data);
            }
        }

        await logs.push(logObj);

        await fs.promises.writeFile(filePath, JSON.stringify(logs, null, 2));
        console.log(chalk.green("Log updated: ") + chalk.yellow(logObj.requsetDate, logObj.requsetTime))
    } catch (error) {
        console.log(chalk.red("Error Updating logs...", error))
    }


}

const server = createServer(async (req, res) => {

    if (req.method == "GET") {
        if (req.url == "/") {
            serveFile(req, res, path.join('public', 'index.html'), 'text/html', 200);
        } else if (req.url == "/style.css") {
            serveFile(req, res, path.join('public', 'style.css'), 'text/css', 200);
        } else {
            serveFile(req, res, path.join('public', '404.html'), 'text/html', 404);
        }
    }

    // Handle POST
    if (req.method === "POST" && req.url === "/shorten") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            try {
                const formData = Object.fromEntries(
                    body.split("&").map(pair => pair.split("=").map(decodeURIComponent))
                );
                //! removing &&%% Symbols form url :)
                console.log(formData);
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.end(`Short URL created: ${formData.shortCode} Original URL: ${formData.url}`);
            } catch (err) {
                serveFile(req, res, path.join('public', '404.html'), 'text/html', 404);
            }
        });
    }
})

server.listen(port, () => {
    console.log("Server is running on port " + port);
})