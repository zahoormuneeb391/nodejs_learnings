//! FS Module (Asynchronous)

// CREATE (fs.writeFile)
// READ (fs.readFile)
// UPDATE (fs.appendFile)
// DELETE (fs.unlink)

//! We have same syntax of fs async as fs sync but with additional callback parameter 

const fs = require("fs");
const path = require("path");

const fileName = "README.md";
const filePath = path.join(__dirname, fileName);

// //! Create File :)
// const writeData = "This is the initial data of README.md file";
// fs.writeFile(filePath, writeData, (err) => {
//     console.log("file created successfully");
//     console.log("err form fs.writeFile(): ", err)
// })

// //! Read File :)
// fs.readFile(filePath, "utf-8", (err, data) => {
//     console.log("Data of ", fileName, "form path ", filePath)
//     console.log(data);
//     console.log("err form fs.readFile(): ", err)
// })


// //! Update File Data :)
// const updatedData = "This is the update data of README.md file"
// fs.appendFile(filePath, updatedData, (err) => {
//     console.log(fileName, "update successfully");
//     console.log("err form fs.appendFile(): ", err);
// })


// //! Rename File :)
const newFileName = "MUNEEB.md";
const newFilePath = path.join(__dirname, newFileName);
// fs.rename(filePath, newFilePath, (err) => {
//     console.log("err from fs.rename(): ", err);
//     console.log("file ", fileName, "rename to ", newFileName);
// });


// //! Delete File :)
fs.unlink(newFilePath, (err) => {
    console.log(newFileName, "File deleted successfully from path ", newFilePath);
    console.log("err from fs.unlik(): ", err)
})