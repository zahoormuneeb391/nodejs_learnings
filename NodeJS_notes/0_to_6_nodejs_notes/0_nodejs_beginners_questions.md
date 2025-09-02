# Node.js Beginner Questions:

## 1. What is Node.js?
Node.js is a **runtime environment** that allows you to run JavaScript on the server-side. It uses the **V8 engine** to execute JavaScript outside the browser.

## 2. What is V8 engine?
V8 is a **JavaScript engine developed by Google** for Chrome. It converts JavaScript code into **machine code** for fast execution. Node.js embeds V8 to run JS on servers.

## 3. Is Node.js a server?
No, Node.js is **not a server**. It is software that runs on a server machine and provides server-side capabilities.

## 4. Who created Node.js?
Node.js was created by **Ryan Dahl** in 2009 to make JavaScript usable on the server-side.

## 5. Why Node.js was created?
To build **scalable and fast web applications** using JavaScript on the server with **non-blocking, event-driven I/O**.

## 6. What is a server in simple terms?
A server is a **machine or software** that listens for requests and responds. Node.js runs on a server machine to handle requests.

## 7. What is I/O?
I/O stands for **Input/Output**, like reading files, writing files, or handling network requests.

## 8. What is blocking I/O?
Blocking I/O means the server **waits** for a task to complete before moving to the next task.

## 9. What is non-blocking I/O?
Non-blocking I/O allows the server to **start a task and continue processing others**, then handle the result when ready.

**Example:**
```js
const fs = require('fs');
fs.readFile('file.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
console.log('File read started');
```
Output:
```
File read started
(file content after reading)
```

## 10. What does event-driven mean?
Node.js waits for **events** (like HTTP requests or file reads) and executes callbacks when the event occurs.

## 11. What are Node.js core modules?
Node.js has **built-in modules** like `fs`, `http`, `net`, and `path` that provide extra functionalities outside V8.

## 12. What is npm?
npm (Node Package Manager) allows developers to **install, share, and manage packages** in Node.js projects.

## 13. Can JavaScript run outside a browser?
Yes, Node.js allows JS to run outside the browser using V8 engine and extra libraries.

## 14. How does Node.js handle multiple requests?
Node.js uses **event loop and non-blocking I/O** to handle many requests simultaneously without waiting.

## 15. Is V8 open source?
Yes, V8 is **open source**, written mostly in C++, and can be used outside Chrome in Node.js.

## 16. What is the difference between browser JS and Node.js JS?
| Feature        | Browser JS            | Node.js JS          |
|----------------|-----------------------|---------------------|
| Environment    | Browser               | Server              |
| Libraries      | DOM, window, document | fs, http, net       |
| Engine         | V8                    | V8                  |

## 17. Does Node.js compile JS?
Yes, Node.js **does not interpret JS line by line**; V8 **compiles JS to machine code** using Just-In-Time (JIT) compilation.

## 18. Can Node.js access file system?
Yes, using the `fs` module:
```js
const fs = require('fs');
fs.writeFileSync('test.txt', 'Hello Node.js');
```

## 19. What is the event loop?
Event loop is the mechanism in Node.js that **keeps track of events** and ensures callbacks are executed without blocking the server.

## 20. How does Node.js differ from traditional servers?
- Traditional servers: create a new thread for each request (blocking).  
- Node.js: **single-threaded, event-driven, non-blocking**.

## 21. What is the role of Ryan Dahl in Node.js?
Ryan Dahl **designed Node.js** and added the concept of **non-blocking, event-driven JS runtime** on the server.

