# NodeJS Internal Working.

```
              Nodejs
                |
       ---------------------
       |                   |
      v8                  LibUV
       |                   |
   ----------          -------------
   |        |          |           |
  C++       JS    Event-Loop     Thread-Pool
```

`<> index.js` ------------> `node index.js` ----> `Node Process`

#### 1. Main Thread: `where our actual whole code runs` ---> `single thread`

`Main Thread` Sequence

- init Project.
- Execution of Top Level Code `direct code in a file not in a cb or fn`.
- Require Modules `core modules or external package`.
- Event CallBack Register. `not run just register in event queue`.
- Event Loop starts.

#### 2. Thread Pool `if we have a intensive or cpu intensive heavy task we will execute it in thread pool not in main thread.`

```
                       Thread Pool
                            |
       -------------------------------------------
       |             |             |             |
   Thread:01     Thread:02      Thread:03     Thread:04

```

- if any `CPU Intensive` or `Heavy` task comes, it will use the `Thread` form `Thread  Pool` for execution of code.

## CPU Intensive Task Examples

- Task related to file system.
- Encryption/Decryption.
- Cryptography or Hashing
- File Compression

`when event loop starts it will check is there any cpu intensive task comes form code if it comes it will offload (Bejh dy Gi) the cpu intensive tasks to thread-pool`.

### Now our Event loops is start in our `Main Thread`

- at this poit
- Top level code already been executed.

  **`Event Loop Checks for runnig callback` the sequence of priorty is:**

- Expired Timer Callbacks `setTimeout()`, `setInterval()`
- I/O Polling `(FS success callbacks)`, `I/O callbacks`
- `setImmediate Callbacks`.
- Close Callbacks `(serverClose cb, socketClose cb .. etc)` `socket.on("close",...)`
- Now `event loop` checks is there any pending task
- `Pending..? == false (No Tasks)` = exit the program
- `Pending..? == true (Task exists)` = Event loop start again (form expired timer callback checking)
- When ever event loop phase transition at any point = `promises` runs if promise is completely fullfilled.

## Threads in Thread Pool

- By Default = **`4 Threads`**. (means we can do/execute 4 CPU intensive task parallely)
- Maximun Can be = **`128 Threads`**.
- And we can also control the **`Threads`**.

```js
const fs = require("fs");

setTimeout(() => console.log("timeout"), 0);

setImmediate(() => console.log("immediate"));

console.log("Hello form the top level code");
```

```
**Output**
> Hello form the top level code
> timeout
> immediate
```

# But

if we run the following script which is not within I/O cycle (i.e in `main module`)., the order in which two timers are executed is `non-deterministic` as it is bounded by the performance of teh process.

```js
const fs = require("fs");

setTimeout(() => console.log("timeout"), 0);

setImmediate(() => console.log("immediate"));

// console.log("Hello form the top level code");
```

```
**Output**
> timeout
> immediate
```

### How to control Threads.

we can control threads using:

- **`process.env.UV_THREADPOOL_SIZE = 4`** means 4 TASK can run parallely.
- **`process.env.UV_THREADPOOL_SIZE = 10`** means 10 TASK can run parallely

## How `Nodejs` is differnt form other multi threaded languages.
