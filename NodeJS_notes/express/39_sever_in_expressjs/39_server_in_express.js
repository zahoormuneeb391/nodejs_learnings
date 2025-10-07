import dotenv from "dotenv";
dotenv.config({ path: "../../../.env" });

import express from "express";
import fs from "fs";

const app = express();
//! app - the variables which holds the created Express app, which you can use to:
//* Define routes                app.get(), app.post(), ... etc
//* Configure middleware         app.use()
//* Start the server             app.listen()

let home = fs.readFileSync("app/home.html", "utf-8");
let about = fs.readFileSync("app/about.html", "utf-8");
let contact = fs.readFileSync("app/contact.html", "utf-8");
let _404 = fs.readFileSync("app/404.html", "utf-8");


function serverFile(route, file, headers = "text/html", statusCode = 200) {
  app.get(route, (req, res) => {
    res.setHeader("Content-Type", headers);
    return res.status(statusCode).send(file);
  });
}

serverFile("/", home);
serverFile("/about", about);
serverFile("/contact", contact);
app.use((req, res) => res.status(404).send(_404));

const PORT = process.env.PORT || 5000;
console.log("port:", PORT);
console.log("developer:", process.env.DEV);

app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
