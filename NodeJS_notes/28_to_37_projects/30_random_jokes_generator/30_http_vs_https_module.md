# 📒 Node.js `https` vs `http`

## 1. `http` vs `https`

- **http module** → Used to create a normal web server (non-secure, port 80).
- **https module** → Used to create a secure web server (with SSL/TLS certificate, port 443).
- **Use case**:
  - Development/testing = `http`
  - Production/real users = `https`

---

## 2. Fetching data from APIs in Node.js

- Node.js itself is a backend ✅
- But sometimes we need data from **other services/APIs** (e.g., Weather API, Payment API, GitHub API).
- So Node.js can also act like a **client** and fetch data.

---

## 3. `fetch` and `XMLHttpRequest` in Node.js

- In the **browser**:
  - `fetch` ✅ available
  - `XMLHttpRequest` ✅ available
- In **Node.js**:
  - `fetch` ❌ not available in older versions, but **✅ built-in from Node.js v18+**.
  - `XMLHttpRequest` ❌ not available (browser-only feature).
- For older Node.js versions, you can use libraries like `node-fetch` or `axios`.

---

## 4. Example: Using `fetch` in Node.js

```js
// Node.js v18+ (fetch is built-in)
const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
const data = await response.json();
console.log(data);
```
