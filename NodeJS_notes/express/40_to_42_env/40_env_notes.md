# 🌍 40. Environment Variables & .env File

## 🔹 What is a `.env` File?

- A simple **configuration file** used to store environment variables.
- File name is always **`.env`** (no extension).
- Commonly used to keep **sensitive data** (API keys, DB credentials, secret tokens).

---

## 🔹 What are Environment Variables?

- Variables that define the environment in which an application runs.
- In Node.js / Express, accessed with:
  ```js
  process.env.VARIABLE_NAME;
  ```

--------------------------------------------------------------------------🔹

## How to Use .env in Express

### 1. Install dotenv packate

```bash
npm insall dotenv
```

### 2. Import and configure dotenv:

```js
import dotenv from "dotenv";

dotenv.config();
// This will load .env from root by default
```

### 3. Create .env file in project root:

```js
Environment Vaiables:
PORT=4000
DB_URL=mongodb://localhost:27017/mydb
SECRET_KEY=mySuperSecretKey
```

### 4. Use in code:

```js
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

### 5. Project Structure

```pgsql
my-project/
├── node_modules/
├── public/
├── src/
│   └── index.js
├── .env
├── .gitignore
└── package.json
```

### Important Notes

- `.env` file should always be in project root folder (same level as package.json).
- `.env` should NOT be pushed to GitHub → add to .gitignore:

## 2nd Way:

- To access environment variables you firt have to set in you OS
- For `macOS` and `linux` you cans use **export VARIABLE_NAME="value"** in your terminal.
- On `PowerShell` you can use **$env:VARIABLE_NAME="value"**
- On `CMD` you can use **set VARIABLE_NAME="value"**
- If you want to set permanently in `Linux` and `MacOS` you have to include that command in you shell config `(~/.bashrc, ~/.zshrx)`.
- If you want to set permanently in `Windows` you can search `Environment Variables` in windows search

## VERY IMPORTANT POINTS

- Deployment Environment
- On cloud/server, .env file is not used directly.
- You must set variables in the server’s environment (e.g., Heroku config vars, Vercel dashboard, AWS Secrets).
- Node.js will read them via process.env.

| Feature        | System/User Env (Local) | `.env` File (dotenv)                     |
| -------------- | ----------------------- | ---------------------------------------- |
| Portability    | Tied to your OS only    | Portable across machines                 |
| Usage in Teams | Hard to share           | Easy to share (just `.env.example`)      |
| Deployment     | Must re-set on server   | Must re-set on server (same requirement) |
| Best For       | Personal dev setup      | Standard practice for Node.js apps       |

### Rule of Thumb:

- Local: .env file is king 👑
- Deployment: Server environment variables are king 👑
- Dotenv helps locally, but server environment always wins in production.

### `example.env` file

### What is .env.example?

- A template file that lists all the environment variables your project needs.
- It does not contain real secrets, only variable names (sometimes with dummy values).
- Helps developers know what to put inside their own .env file.

### Example

`.env.example:`

```env
PORT=             # Port for server
DB_USER=          # Database username
DB_PASS=          # Database password
SECRET_KEY=       # Secret key for JWT
```

`.env (real, ignored by git):`

```env
PORT=3000
DB_USER=muneeb
DB_PASS=superSecret123
SECRET_KEY=mySecretKey
```

### 💡 Rule of Thumb:

- .env = real secrets (never commit)
- .env.example = safe template (always commit)
