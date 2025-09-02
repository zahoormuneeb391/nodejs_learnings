const fs = require("fs");
const crypto = require("crypto");


// 4 CPU Intensive Task  //! Executed in Thread Pool
//! These 4 task are CPU intensive and we have 4 threads in thread pool by-default so these
//! 4 task executed parallely in thread pool by 4 threads.

const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 2;

console.log(process.env.UV_THREADPOOL_SIZE)

crypto.pbkdf2('password1', 'salt1', 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms`, "Password 1 Done");
})
crypto.pbkdf2('password2', 'salt1', 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms`, "Password 2 Done");
})
crypto.pbkdf2('password3', 'salt1', 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms`, "Password 3 Done");
})
crypto.pbkdf2('password4', 'salt1', 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms`, "Password 4 Done");
})
crypto.pbkdf2('password5', 'salt1', 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms`, "Password 5 Done");
})
crypto.pbkdf2('password6', 'salt1', 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms`, "Password 6 Done");
})



// setTimeout(() => console.log("timeout - 1"), 0);

// setImmediate(() => console.log("immediate - 1"));

// fs.readFile("test.txt", "utf-8", (err, data) => {
//     console.log("I/O Polling finished", data);

//     setTimeout(() => console.log("timeout - 2", 0));
//     setTimeout(() => console.log("timeout - 3", 5000));
//     setImmediate(() => console.log("immediate -2 ....."));
// });

console.log("Top Level Code......")