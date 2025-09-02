//! fs/promises Module in Nodejs

//! you cans use 
//? const fs = require("fs/promises"); 
//  instead 
//? const fs = require("fs");
//  to avoid writing fs.promises.readFile() every time

const fs = require("fs").promises;
const path = require("path");


//! Creating a Dir and a file inside Dir then removing that Dir

// const fileName = "README.md";
// const dirPath = path.join(__dirname, "FSPromises");
// const filePath = path.join(dirPath, fileName);


// fs.promises.mkdir(dirPath)
// .then(()=>{console.log("directory created")})
// .catch((err)=>{console.log("Error creating directory", err)})


// fs.promises.writeFile(filePath, "This is the initial data of the file")
// .then(( )=> {
//     console.log("File created successfully")
// }).catch((err)=>{
//     console.log("Error writing a file:", err);
// })


// fs.rm(dirPath, {recursive: true, force: false})
// .then(()=>{console.log("Driectory removed successfully")})
// .catch((err)=>{console.log("Error removing directory: ", err)})


//! CRUD on file systems using fs.promises

const fileName = "README.md";
const filePath = path.join(__dirname, fileName);
const newFileName = "README_NEW.md";
const newFilePath = path.join(__dirname,newFileName);

//! Create file
// fs.writeFile(filePath, "This is the initial data of the file.")
// .then(()=>{console.log("File created successfully")})
// .catch(err=>console.log("Error creating a file:", err))

//! Rename file
// fs.rename(filePath, newFilePath)
// .then(()=>{console.log("file rename successfully")})
// .catch((err)=>{console.log("Error renaming file: ",err)})

//! Reading file
// fs.readFile(newFilePath, "utf-8")
// .then((data)=> {console.log(data);})
// .catch((err)=>{console.log("Error reading file:",err)})

//! Update file
// fs.appendFile(newFilePath, " This is the updated data")
// .then(()=> {console.log("file updated");})
// .catch((err)=>{console.log("Error updating  file:",err)})

//! Deleting file:
// fs.unlink(newFilePath)
// .then(()=>{console.log("file deleted successfully");})
// .catch((err)=>{console.log("Error deleting file: ", err)})
