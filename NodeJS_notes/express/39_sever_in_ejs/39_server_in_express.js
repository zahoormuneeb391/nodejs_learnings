import dotenv from "dotenv"
dotenv.config({ path: "../../../.env" });


import express from "express";
import fs from "fs";


const app = express();
//! app - the variables which holds the created Express app, which you can use to:
//* Define routes                app.get(), app.post(), ... etc
//* Configure middleware         app.use()
//* Start the server             app.listen()

let home = fs.readFileSync("home.html", "utf-8");
let about = fs.readFileSync("about.html", "utf-8");
let contact = fs.readFileSync("contact.html", "utf-8");

console.log("PORT form .env: ", process.env.PORT)

app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.send(home);
});
app.get("/about", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.send(about);
});
app.get("/contact", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.send(contact);
});

app.use((req, res) => res.status(404).send("404 - Page Not Found"));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running at prot: ${PORT}`)
})