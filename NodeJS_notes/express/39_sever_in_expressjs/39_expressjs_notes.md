# 39. Introduction to ExpressJS

- EJS is a web application `framework` for `NodeJS` based on `http module`.

- It simplifies `routing`,`middleware`, `handling http requests` in Node.js applications.

- Alternatives: `Fastify`, `Nest.js`, `Koa`, `Hono`, `Elysia.js`

## Why Use Express?

- Easier than using Node.js `http` module directly.

- Built-in **routing system** (`app.get()`, `app.post()`, etc.).

- **Middleware support** for authentication, logging, parsing, etc.

- Perfect for building **REST APIs** and **web applications**.

- Flexible and lightweight → works with any database, frontend, or template engine.

## Request & Response

- `req` → incoming request data (query, body, headers).

- `res` → methods to send response (res.send(), res.json(), res.status()).

## Error Handling

- Custom middleware can handle 404 or server errors.

- app.use((req, res) => res.status(404).send("404 - Not Found"));
