//! ES Module Caveats

//? Point - 01
// In newer version of Nodejs (14.8+), we can use top-level await without needing to wrap it in an async function.

// async function getData(id) {
// const respose = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
// const data = await respose.json();
// console.log(data);
// }

// getData(20);



//? Point - 02

// console.log(__dirname)  //! ReferenceError: __dirname is not defined in ES module scope
// console.log(__filename) //! ReferenceError: __filename is not defined in ES module scope

//! Solution (Nodejs 20.11.0+):

// replace "__" with "import.meta" but your Nodejs version muust be 20.11.0+
//? means
console.log(import.meta.dirname)
console.log(import.meta.filename)
console.log(import.meta.url)


//! Solution for Older versions:

import path from 'path'
const __filename = new URL('', import.meta.url).pathname;
const __dirname = path.dirname(__filename);
console.log("Solution for Older versions:")
console.log(__dirname)
console.log(__filename)