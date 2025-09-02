//! No window object, document object in Nodejs
//! global in Nodejs


//* window vs global in nodejs
//  JavaScipt behaves differently in browser (window & document) and in Nodejs (global).

//! In browser
// console.log(window)
// console.log(document)
// console.log(window.document)

//! In Nodejs
global.console.log(global)
console.log(globalThis)

//! NodeJS Context - global
// In NodeJS, there'e no window or document. Why?
// Because Nodejs runs outside the browser it does not deal with DOM or browser-specific APIs.

// Instead NodeJS has global object. It is the equivalent of window object of browser but designed for server side environment.


//! globalThis:
//  globalThis is a new feature introduced in ECMAScript 2020 (ES11) that provides a standard way to access global object in any JS environment

// In NodeJS  : globalThis = global
// In Browser : globalThis = window

//? Why globalThis is useful?
//  Consistent Access: accessing global object varied depending on the enviroment

// Nodejs      --> global
// Browser     --> window
// Web Workers --> self
// Other environment might have their own global objects.


