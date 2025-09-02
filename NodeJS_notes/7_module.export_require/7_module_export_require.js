//! Module in NodeJS:

//? Module in NodeJS is something like this:
//  Component --> ReactJS
//  Module    --> NodeJS


//? What Exactly is a Module in NodeJS?
//  A module in Nodejs represents a file containing code that is self-contained, reusable and encapsulated.
//  Nodejs uses commonJS module system.
//  This module system came before ES Modules was introduced in JS, thats why its syntax is different.
//  Modules in Nodejs are created by defining separate files for different functionalities
//  You must export anything (function or varibales) if you want to make it accessible to other modules.

//? Example:
//! maths.js
// const add = (a, b) => a + b;
//? commonJS Syntax
// module.exports = add;
//? ES Syntax
// export default add;


//! app.js
//? ES Syntax
//  import add from "./maths.js"
//? commonJS Syntax
//  const add = require("./math.js");
//  console.log(add(2,3));  // Output: 5


//? Built-In Module in NodeJS
//  OS      --> provides info about OS
//  PATH    --> provides utilites for working with file paths
//  FS      --> file system operation like reading and writing files.
//  HTTP    --> create HTTP servers.

// -----------------------------------------------------------------

//! FAQs (Module  in NodeJS)
//! 1. What is CommonJS (CJS)?
//? It is Node.js's old module system that uses "require" and "module.exports".
//? Example:
//  const fsCJS = require("fs"); 
//  module.exports = myFunc;


//! 2. What is ES Modules (ESM)?
//? It is JavaScript's modern and standard module system that uses "import" and "export".
//? Example:
//  import fsESM from "fs"; 
//  export default myFunc;


//! 3. Why did Node.js use CommonJS by default?
//? Because all the old projects and libraries were built with CommonJS.
//? If Node.js had switched directly to ESM, older code would have broken.


//! 4. How does Node.js support ESM now?
//? Three ways to use ESM in Node.js:
//? (1) Use the `.mjs` file extension
//? (2) Add `"type": "module"` in package.json
//? (3) Mix: keep CommonJS files as `.cjs` and ESM as `.mjs`


//! 5. When does VS Code suggest "require" vs "import"?
//? If project is ESM (`"type": "module"`), it suggests "import/export".
//? If project is CommonJS (default), it suggests "require/module.exports".


//! 6. What is a module in Node.js?
//? Every file in Node.js is a module with its own scope and logic.
//? Example:
// math.js
export function add(a, b) { return a + b; }
// app.js
import { add } from "./math.js";
console.log(add(2, 3)); // 5


//! 7. What is the similarity between a React component and a Node module?
//? A React component is a small piece of UI logic.
//? A Node module is a small piece of backend/business logic.


//! 8. What is the syntax difference between CommonJS and ESM?
//? CommonJS:
//  const math = require("./math");
//  module.exports = myFunc;
//
//? ESM:
//  import math from "./math.js";
//  export default myFunc;


//! 9. Which module system is recommended today?
//? For new projects: ESM (import/export) is recommended.
//? Reason: it’s modern, faster, and standard across browsers + Node.js.


//! 10. How to use old CommonJS libraries in an ESM project?
//? You can still import them like this:
//  import pkg from "old-commonjs-lib";
//  const { someFunc } = pkg;
