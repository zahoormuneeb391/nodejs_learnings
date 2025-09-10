# 38. How Web Works

- Request - Response Cycle
- HTTP and HTTPS

## 1- Request - Response Cycle

### 1.`client ----(website.com)----> DNS Lookup`

- `DNS`: (Domain Name System) translates the domain (e.g example.com) into server's IP address

### 2.`DNS Lookup ----(GET 25.25.25.25)----> Server (Node.js, Python, Go , PHP)`

- The Browser sends and `HTTP` `GET` request to teh server's IP address

### 3.`Server ---(may-be)---> DB or FileSystem`

- The Server receives the `request`, `process` it, and generate a `response`.
- The `Server` might also use `DB` or `fetch` data form external service based on the request.

### 3.`Client <---(Responese)---> Server`

- The `server` sends the `response` (could be HTML, file, JSON etc) back to `client`.
- The `client` (browser) renders the response for the user to view

## 2- HTTP and HTTPs

- `HTTP` use to transmitting data over web.

- It defines how the requests and responses should look and how server should handle them.

- `HTTPs` is the secure version of `HTTP`, using `SSL/TLS` encryption to protect data during `transmission`.

- The `Browser` sends `HTTP/HTTPs` request to othe server for a specific resource (e.g webpage, image, json etc).

- There are different `HTTP` methods like `GET`,`POST`,`PUT`,`DELETE`,`PATCH` etc.
