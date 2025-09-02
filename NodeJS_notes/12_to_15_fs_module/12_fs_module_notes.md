## FS Module:

"fs" (File System) module is the core module of nodejs that allows you to work with file system, enabling you to read, write, update, delete and watch the files.

## Some Important Operation perfomed using fs module are

- READ
- WRITE
- UPDATE
- DELETE
- RENAME
- APPEND

##  There are two types of fs module.
Synchronous (Sync)
Asynchronous (Async)

## Synchronous (Sync):
1. In sync methods the code is executed line by line and each line waits for the previous line to complete before executing.
2. Sync methods are blocking, meaning they block the execution of subsequent code until the operation is complete.
3. Sync methods are easier to read and understand, but they can lead to performance issues in I/O-bound applications.


## Asynchronous (Async):
1. In async methods the code does not wait for the previous line to complete before executing.
2. Async methods are non-blocking, meaning they allow other code to run while the operation is being performed.
3. Async methods are more complex to read and understand, but they can improve performance in I/O-bound applications.

<!--! Later we will learn about Promises and async/await to handle async code more effectively. -->


# Synchronous (Sync)
1. Code runs **line by line**.  
2. The next operation will not start until the current one is finished.  
3. It is **blocking** → the server waits.  
4. Only good for **small scripts or quick tasks**. (May b it takes time to read,write or updating a file) 


# Asynchronous (Async)
1. Operations run in the **background**.  
2. The program continues running without waiting.  
3. It is **non-blocking** → keeps the server fast.  
4. Results are returned using **callbacks** or **promises/async-await**.  


# fs Module Versions
1. **Sync methods**  
   - Example: `fs.readFileSync()`, `fs.writeFileSync()`  
   - Easy to use, but blocks the program.  

2. **Async with Callbacks**  
   - Example: `fs.readFile("file.txt", cb)`  
   - Non-blocking, but can lead to callback hell.  

3. **Async with Promises / async-await**  
   - Example: `fs.promises.readFile()`  
   - Modern, clean & recommended way.  



# Best Practice
1. For **server code / production** → always use **async-await (fs.promises)**.  
2. For **small scripts / testing** → sync methods are fine.  



# Extra Note
⚠️ In **programming**, "sync" means **blocking code**.  
⚠️ In **cloud apps (Google Drive, Photos)**, "sync" means **keeping data the same across devices**.  
These are **different concepts**.  

