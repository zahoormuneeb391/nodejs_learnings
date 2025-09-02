const http = require("http");
const fs = require("fs")
const path = require("path");


async function readFile(fileName, resObj) {
    try {
        const filePath = path.join(__dirname, "web", fileName);
        let data = await fs.promises.readFile(filePath, "utf-8");
        resObj.end(data)
    } catch (error) {
        console.log("Error Reading file", error)
    }
}

function sendRes(requestedFile, resObj) {
    switch (requestedFile) {
        case ".html":
            readFile("home.html", resObj)
            break;
        case "about.html":
            readFile("about.html", resObj)
            break;
        case "contact.html":
            readFile("contact.html", resObj)
            break;
        case "favicon.ico":
            console.log("favicon requested")
            break;
        default:
            readFile("404.html", resObj)
            break;
            break;
    }
}



//! Creating Server :)
const server = http.createServer((req, res) => {
    const requestedFile = `${req.url.slice(1)}.html`;

    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    let log = `Request on ${req.url}: ===> ${date} | ${time} \n`;

    fs.appendFile("request_log.txt", log, (err) => {
        console.log(`Log Added => ${date} | ${time}`);
    })
    sendRes(requestedFile, res);
})

const port = 3000;

server.listen(port, () => {
    console.log("Server is listening at port 3000.....!")
})