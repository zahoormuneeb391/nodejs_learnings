## 1. HTTP Module in Node.js

1. Node.js has built-in modules, one of them is http.
2. The http module allows you to create servers that handle
   requests and send responses.

```js
//!  Basic Syntax
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, server is running!");
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

## 2. What Does "Server" Mean in Node.js?

1. A server in real life is hardware (a machine).
2. In Node.js, when we say "server", we mean a software process
   that listens on a port (e.g., 3000, 8000).
3. It allows your machine to accept web requests and send back responses.

## 3. Why HTTP and Not HTTPS?

1. http module is simple and lightweight, good for learning and basic servers.
2. https module also exists in Node.js, but it requires SSL/TLS certificates
   for secure communication.
   So:
3. Use http for normal servers.
4. Use https for secure servers.

## 4. What is Nodemon?

1. Nodemon is a third-party tool (npm package).
2. Created by Remy Sharp in 2009.
3. It automatically restarts the Node.js server when file changes are detected.
4. Without it, you would need to restart manually after every code change.
5. Command `nodemon <filename>` instead `node <filename>`

## 5. Nodemon vs Node --watch

1. Nodemon came first (2009).
2. `node --watch <filename>` was introduced later in Node.js v18 (2022).
3. Nodemon was widely used before this feature existed.

## 6. Before Nodemon

1. In early Node.js versions (2009–2010), developers had to restart the server
   manually after every file change.
2. Nodemon made this process automatic and faster.

## 7. Did Node.js Copy Nodemon?

1. Nodemon became popular in the community.
2. Later, Node.js added --watch officially in v18.
3. So yes, Node.js was inspired by nodemon to add this feature.

<!--!-------------NPM Global Packages------------->

## NVM, Global `-g`, and Nodemon — Short Notes

## 1 What does `-g` mean with NVM?

1. `npm install -g <pkg>` installs **globally for the _current Node version_** only.
2. With **NVM**, each Node version has its **own global packages** and binaries.

- e.g.
  - `~/.nvm/versions/node/v16.x.x/lib/node_modules/`
  - `~/.nvm/versions/node/v18.x.x/lib/node_modules/`

3. **Implication:** Switch Node version → global packages don’t carry over.

## 2 Where do global packages go?

Check current prefix:
`npm config get prefix`

npm install -g <pkg>
<pkg> --version
npm install --save-dev <pkg>

## PORTS.

1. A port is like a door (gateway) on your computer/server where data goes in and out.
2. A computer can have one IP address, but multiple services can run on different ports of that IP.
   👉 IP address = House address
   👉 Port = Room number inside the house

## Real-life Example

Your house has one address, but many rooms:

- Port 80 → Living Room (HTTP server)
- Port 443 → Secure Room (HTTPS server)
- Port 3306 → Database Room (MySQL)
- Port 27017 → Database Room (MongoDB)

So, if someone says “go to room 80”, they can only access HTTP.

## Common Port Numbers

80 → HTTP (normal websites)
443 → HTTPS (secure websites)
21 → FTP (file transfer)
25 → SMTP (emails)
3000 / 5000 / 8080 → commonly used by developers for local servers

## Why not always use Port 80?

1. Ports 80 and 443 are reserved by the system and usually need admin/root permissions.
2. That’s why developers prefer custom ports like 3000, 5000, 8080 for development.

## A port is just a gate number on your machine where your app/server listens for requests
