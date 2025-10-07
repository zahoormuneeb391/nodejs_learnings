## ES Modules Caveats (Caveats measn things u should know)

### ES Modules:

- ES Modules `(import/export)` are an alternative to CommonJS

- In newer version of Nodejs `(14.8+)` you can use top-level await without needing to wrap it in an async function.

### Top-Level Await

**`__dirname`** and **`__filename`** issue:

- In CommonJS, `__dirname` (current directory) and `__filename` (current file path) are available by default

- In ES Modules, they don't exist.

- This can be problematic when you need to get directory name or file path.
