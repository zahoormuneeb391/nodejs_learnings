//! Single Object 
// const maths = require("./8_multiple_exports");
//! Use destructing 
// const { add, subtract, multiply, divide } = require("./8_multiple_exports");
//! Use import syntax (ESM)
import { add, subtract, multiply, divide } from "./8_multiple_exports.js";


//! Using the functions
console.log(add(2, 3));
console.log(subtract(5, 2));
console.log(multiply(3, 4));
console.log(divide(10, 2));
