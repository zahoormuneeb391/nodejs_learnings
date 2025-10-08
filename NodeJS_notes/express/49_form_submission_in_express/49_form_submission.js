//! Imports
import path from "path";
import { Users } from "./db/model.js";
import mongoose from "mongoose";
import express from "express";
const app = express();
const PORT = 8000;

//! Database Connection
mongoose.connect("mongodb://localhost:27017/formsubmission")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(`Error Connecting MongoDB ${err}`));

//! Middlewares
app.use(express.static("./public"));
app.use(express.urlencoded())

//! File Paths
let signupForm = path.join(import.meta.dirname, "public", "signup_form.html");
let loginForm = path.join(import.meta.dirname, "public", "login_form.html");


//! Home Route
app.get("/", (req, res) => res.status(200).send("Welcome to ExpressJS Form Submission"));

//? Other Routes
app.get("/signup", async (req, res) => {
    const { username, email, password } = req.query;
    const userExist = await Users.find({ $or: [{ username }, { email }] })
    if (!username || !email || !password) {
        return res.status(200).send("<h1>Some fields are missing</h1>");
    }
    if (userExist.length > 0) {
        return res.status(200).send("<h1>Username or Email Already exists</h1>");
    }
    await Users.create({ username, email, password });
    return res.status(200).send("<h1>Form Submitted Successfully</h1>");

});

app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const searchUser = await Users.find({ username, password });
    if (searchUser.length == 1 && searchUser.length != 0) {
        return res.status(200).send(`<h1>Login Successful ${username}</h1>`)
    }
    return res.status(200).send(`<h1>Login Failed ${username} not exist</h1>`);
})

app.get("/login", (req, res) => res.status(200).sendFile(loginForm));


//! 404 Error and Server Start
app.use((req, res) => { res.status(404).end("404 Not Found") })
app.listen(PORT, (req, res) => console.log(`Server is running at http:localhost:${PORT}`));