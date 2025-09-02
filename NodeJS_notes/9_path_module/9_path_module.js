//! Path Module in NodeJS

//* In NodeJS, the path module use to manipulate the files path safely and its cross-platform compatible.
//* In Windows we have backslash (\)
//* In Linux and MacOS we have forward slash (/).
//* The path module of Nodejs concate the strings and convert them into the correct path format and it gives us absolute path.


//? Special NodeJS constants (Only available in CommonJS):
//* __filename: provides the absolute path of the currently executing file.
//* __dirname: provides the absolute path of the currently executing directory.

// console.log(__filename);
// console.log(__dirname);

//! Path Module Methods:
const path = require("path");

console.log(path.basename(__filename));
// Returns the last portion of a path, which is the file name in this case.

console.log(path.basename(__dirname));
// Returns the last portion of a path, which is the directory name in this case.

console.log(path.dirname(__filename));
// Returns the directory name of a path.

console.log(path.extname("app.cpp"));
// Returns the extension of the file.

console.log(path.join("Windows", "Users", "Muneeb", path.basename(__filename)));
// Joins all given path segments together and normalizes the resulting path.

console.log(path.resolve("Windows", "Users", "Muneeb", path.basename(__filename)));
// Convert paths to absolute paths and resolves them against the current working directory.

console.log(path.parse(__filename));
console.log(path.parse("C:/Windows/Users/Muneeb/app.js"));
// Breaks the path into an object with properties like root, dir, base, ext, and name.

let newPath = path.parse("C:/Windows/Users/Muneeb/app.js");
console.log("newPath object:", newPath);
console.log(path.format(newPath))
// Converts a path object back into a string path.

console.log(path.sep);
// Returns the platform-specific path segment separator (e.g., '\' on Windows and '/' on POSIX).

console.log(path.isAbsolute("C:/Windows/Users/Muneeb/app.js"));  //? true
console.log(path.isAbsolute(__filename))  //? true
console.log(path.isAbsolute(__dirname))   //? true
console.log(path.isAbsolute(path.basename(__filename)))  //? false
// Determines whether a given path is an absolute path.



//!Summary in simple words:

// basename   →  last file/folder name

// dirname    →  folder path only

// extname    →  file extension

// join       →  combine paths safely

// resolve    →  get absolute path

// parse      →  break path into parts (string to object)

// format     →  make path from parts (object to string)

// sep        →  OS-specific slash