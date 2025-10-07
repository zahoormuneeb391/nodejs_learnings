//! STATIC FILES IN EXPRESSJS

// Static files as name mentions are the files which don't change, these can be assets like images, css, html or fonts etc.

// ExpressJS has a middleware named 
//? express.static("public")   // path of static directory  not public itself
// which we can use to serve static files.

// Files in the static directory are accessible via their URL. For instance, if you have an image "logo.png" in public folder, you can access it in the browser with 
//? http://localhost:3000/logo.png



import path from "path"
import express from "express";
const app = express();

//! Middleware for static directory
app.use(express.static("./public"));

//! Getting static files
let home = path.join(import.meta.dirname, "public", "home.html");
let about = path.join(import.meta.dirname, "public", "about.html");
let contact = path.join(import.meta.dirname, "public", "contact.html");

//! Routes
app.get("/", (req, res) => res.status(200).sendFile(home))
app.get("/about", (req, res) => res.status(200).sendFile(about))
app.get("/contact", (req, res) => res.status(200).sendFile(contact))

//! Middlewares  
app.use((req, res) => res.status(404).send("404 page not found"))

//! PORT & Server Starting
const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));