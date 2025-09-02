const http = require('http');
const fs = require('fs');


function getDate() {
    const date = new Date();
    return date.toISOString();
}

const server = http.createServer((req, res) => {

    fs.appendFile(
        "./log.txt",
        `\n Request made to: ${req.url}: ${getDate()}`,
        (err) => {
            console.log("Log updated:", getDate());
        }
    );

    res.end("The Server ruunig on PORT 3000 and is created in Nodejs");
})

const PORT = 3000;

server.listen(PORT, () => {
    console.log('Server is running on port 3000');
})