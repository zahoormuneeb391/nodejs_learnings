//! Imports
import path from "path";
import express from "express";
const app = express();
const PORT = 8000;

//! Middlewares
app.use(express.static("./public"));
app.use(express.urlencoded())

//! File Paths
let signupForm = path.join(import.meta.dirname, "public", "signup_form.html");
let loginForm = path.join(import.meta.dirname, "public", "login_form.html");


//! Home Route
app.get("/", (req, res) => res.status(200).send("Welcome to ExpressJS Form Submission"));

//? Other Routes
app.get("/signup", (req, res) => {
    console.log(req.query)
    return res.status(200).sendFile(signupForm);
});

app.post("/login", (req, res) => {
    console.log(req.body)
    return res.status(200).sendFile(loginForm);
})

app.get("/login", (req, res) => res.status(200).sendFile(loginForm));


//! 404 Error and Server Start
app.use((req, res) => { res.status(404).end("404 Not Found") })
app.listen(PORT, (req, res) => console.log(`Server is running at http:localhost:${PORT}`));