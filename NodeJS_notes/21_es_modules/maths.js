const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


//! CommonJS export
// module.exports = { add, subtract, multiply, divide };
// export { add, subtract, multiply, divide };


//! ES module export
export { add, subtract, multiply, divide };
// export const add = (a, b) => a + b;
// export const subtract = (a, b) => a - b;
// export const multiply = (a, b) => a * b;
// export const divide = (a, b) => a / b;