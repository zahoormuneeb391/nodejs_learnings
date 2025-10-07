import express from 'express';
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hi form the express server"));
app.get("/login", (req, res) => {
    if (req.query == {}) {
        return res.status(200).json(req.query)
    } else {
        console.log(typeof req.query)
        return res.status(200).send("No Query Parameter");
    }
})


app.use((req, res) => res.send("404 Not Found"));
app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));


//! Difference Between ROUTE PARAMS & QUERY PARAMS
// Route Parameters:  //? req.params
// Query Parametes:   //? req.query