//! Named and Aggregate Exports (Multiple Exports and Requires)

//  module.exports is a single object or value
//  when we re-assigne it we lose previous exports

//? Avoid mixing module.exports and exports.property incorrectly 
//? If you re-assign module.exports, it will override exports.property

//! Correct Syntax
//  module.exports = {...}
//  module.exports.property = value

//? Examples:
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

//? Correct Way 1: Using module.exports with an object
module.exports = { add, subtract, multiply, divide };
console.log(module)
console.log(module.exports)
//? Correct Way 2: Using exports.property
// module.exports.add = add;
// module.exports.subtract = subtract;
// module.exports.multiply = multiply;
// module.exports.divide = divide;


//! We can also use export/import syntax of Modern JS (ESM) in NodeJS
// export { add, subtract, multiply, divide };