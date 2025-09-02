console.log("Hello World")


//! This is CommonJS module system
// const fs = require("fs");
// const path = require("path");


//! This is ES module system
import fs from "fs";
import path from "path";



//! To get __filename and __dirname in ES module system 
//! __dirname and __filename are not defined in ES module system
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// console.log(__filename);
// console.log(__dirname);

const filePath = path.join(__dirname, "myFile.txt");

fs.promises.writeFile(filePath, "The inital data off file")
    .then(() => { console.log("File created") })
    .catch((err) => { console.log("Error creating file: ", err) })