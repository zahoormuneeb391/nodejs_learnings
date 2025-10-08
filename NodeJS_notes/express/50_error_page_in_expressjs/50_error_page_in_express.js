//! 404 Error Page in ExpressJS :)

//? Use a middleware function with no specific route like
//* app.use((req,res)=>{...})
//? to handle the unmatched routes


//? Inside this middleware send 404 statusCode like
//* res.status(404)

//? Place the middleware after all defined routes to catch the only unhandled request.
//$ app.use( (res,res) => { res.status(404).send("Page not found") } );

//! ----------------------------------------
//! Imports
import express from "express";
const app = express();
const PORT = 8000;


//! Home Route
app.get("/", (req, res) => res.status(200).send("<h1>Homepage</h1>"));
app.get("/about", (req, res) => res.status(200).send("<h1>About Us</h1>"));
app.get("/contact", (req, res) => res.status(200).send("<h1>Contact Us</h1>"));

//& 404 Error Page 
app.get((req, res) => res.status(404).send("<h1>Page not Found</h1>"))

//! 404 Error and Server Start
app.use((req, res) => { res.status(404).end("404 Not Found") })
app.listen(PORT, (req, res) => console.log(`Server is running at http:localhost:${PORT}`));