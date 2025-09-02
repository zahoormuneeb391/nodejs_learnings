const fs = require("fs");
const path = require("path");



//! Creating or Writing Files

// let fileName = path.join(__dirname, "read.txt");
// fs.writeFileSync(fileName, "Content of the file goes here");
// console.log("File created at", fileName);

//? Normally fs module creates file in the same folder where your terminal is running but using path module we can specify the path where we want to create the file.


//! Creating File in specific Path
// fs.mkdirSync(path.join(__dirname, "syncFiles")); 
// const customPath = path.join(__dirname,"syncFiles", "README.md")
// fs.writeFileSync(customPath,"The Content of README.md file");
// console.log("File created at", customPath);

//! Reading Files
// const readFileName = path.join(__dirname, "read.txt");
// const actualData = fs.readFileSync(readFileName, "utf-8");
// const bufferData = fs.readFileSync(readFileName);            //! Buffer format without utf-8
// console.log("Actual Data: ", actualData);
// console.log("Buffer Data: ", bufferData);


//! Update or Append File
// const fileName = path.join(__dirname, "read.txt");
// fs.appendFileSync(fileName, "\nThis is the appended data.");
// console.log("File updated");


//! Delete File
// const fileName = path.join(__dirname, "read.txt");
// fs.unlinkSync(fileName);
// console.log("File Deleted");



//! Practice fs sync
// let fileName = "demo2.php";
// let filePath = path.join(__dirname, fileName);
// let readFilePath = path.join(__dirname, "demo.php");
// let data = fs.readFileSync(readFilePath);
// console.log(data.toString())
// fs.writeFileSync(filePath, data, "utf-8");
// console.log("file created")
// let updatedData = "echo 'This is updated data using fs.appendFileSync';";
// fs.appendFileSync(filePath, updatedData);
// console.log("file appended and data updated")
// fs.unlinkSync(filePath);
// console.log("file deleted")