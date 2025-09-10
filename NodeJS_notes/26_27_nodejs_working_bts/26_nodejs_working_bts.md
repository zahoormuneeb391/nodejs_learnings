# NodeJS Working BTS

## 1. Synchronous vs Asynchronous

## `Synchronous Code`

1. Tasks are executed sequenctially `(one-by-one)`.
2. Each task `blocks` the next until completed

```js
// Blocking Task
const data = fs.readFileSync("filename.txt", "utf-8");
console.log("File Content", data);
```

## `Asynchronous Code`

1. Tasks don't block execution.
2. Uses `callbacks`, `promises` or `async/await`.

```js
// Non-blocking Task
fs.readFile("filename.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file: ", err);
    return;
  } else {
    console.logo("File Content", data);
  }
});
```

## 2. NodeJS elements

## `v8 Engine` for (Synchronous Tasks)

Google's high performance JS engien that compiles JS into machine code.

## `LibUV` for (Asynchronous Tasks)

- A C library that provides NodeJS with cross-platform support for asynchronous I/O operations like file-system, networking and much more.
- It include the `event loop` and `thread pool`, enabling non-blocking tasks like file-reading, networking and timers etc.
