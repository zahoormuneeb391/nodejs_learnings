//! delaing with file system using async await;

const fs = require("fs");
const path = require("path");


const fileName = "README.md";
const filePath = path.join(__dirname, fileName);
const newFileName = "README_NEW.md";
const newFilePath = path.join(__dirname,newFileName)


//! Create file
// (async function (fp) {
//     try {
//         await fs.promises.writeFile(fp, "Initial Data");
//         console.log("file created successfully");
//     } catch (error) {
//         console.error("Error creating file: ", error);
//     }
// }(filePath));

//! Rename file
// async function renameFile(fp, nfp) {
//     try {
//         await fs.promises.rename(fp, nfp);
//         console.log("file renamed successfully");
//     } catch (error) {
//         console.log("Error renaming file: ",error);
//     }
// }
// renameFile(filePath, newFilePath);


//! Read File
// async function readFile(fp, encoding = "utf-8") {
//     try {
//         const data = await fs.promises.readFile(fp, encoding);
//         console.log("Data read successfully");
//         console.log(data);
//     } catch (error) {
//         console.log("Error reading file: ", error)
//     }
// }
// readFile(newFilePath);

//! Updating file 
// async function updateFile(fp) {
//     try {
//         await fs.promises.appendFile(fp, "New Updated Data of the file");
//         console.log("file updated successfully");
//     } catch (error) {
//         console.error("Error updating file: ", error);
//     }
// }
// updateFile(newFilePath);


//! Delete file
// async function deleteFile(fp) {
//     try {
//         await fs.promises.unlink(fp);
//         console.log("file deleted successfully");
//     } catch (error) {
//         console.log("Error deleting file: ".error)
//     }
// };
// deleteFile(newFilePath);