//? __dirname AND __filename in ExpressJS and ModernJS

//! CommonJS (module.exports/require)
// const path = require("path");
// const fs = require("fs");

//! Works Fine with CommonJS
// console.log(__dirname);
// console.log(__filename);


//*-----------------------------------------------------------------

// !Modern JS (import/export)
import path from "path";
import fs from "fs";

// console.log(import.meta.dirname)
// console.log(import.meta.filename)

// let paths = import.meta;
// console.log("Meta Object: ", paths)
// console.log("Dirname: ", paths.dirname)
// console.log("Filename: ", paths.filename)


//! Final and Best Way

// const __filename = import.meta.filename
// const __dirname = import.meta.dirname

// console.log("📁__dirname:", __dirname);
// console.log("📄__filename:", __filename);


//! Other Ways

// let __filename = new URL(import.meta.url); //! Recommended
// let __filename = new URL(import.meta.filename);
// console.log(__filename)
// console.log(__filename.pathname);

//*-----------------------------------------------------------------

//? SERVERING FILES

import express from "express";
const app = express();
const route = express.Router();

//! Files
let home = fs.readFileSync(path.join(import.meta.dirname, "app", "home.html"), "utf-8");
let _404 = fs.readFileSync(path.join(import.meta.dirname, "app", "404.html"), "utf-8");
let muneeb = fs.readFileSync(path.join(import.meta.dirname, "app", "muneeb.html"), "utf-8");
let adil = fs.readFileSync(path.join(import.meta.dirname, "app", "adil.html"), "utf-8");
let kashif = fs.readFileSync(path.join(import.meta.dirname, "app", "kashif.html"), "utf-8");

//! Homepage
app.get("/", (req, res) => res.status(200).send(home))

//! Other Routes
route
    .get("/muneeb", (req, res) => res.status(200).send(muneeb))
    .get("/adil", (req, res) => res.status(200).send(adil))
    .get("/kashif", (req, res) => res.status(200).send(kashif))

//! Middlewares  
app.use("/brothers", route);
app.use((req, res) => res.status(404).send(_404))

//! PORT & Server Starting
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at port http://localhost:${PORT}`)
})