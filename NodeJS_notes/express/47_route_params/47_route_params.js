import express from 'express';
const app = express();
const port = 3000;



app.get("/", (req, res) => res.send("Hi form the express server"))
app.get("/users/:username/blogs/:slug", (req, res) => {
    const { username, slug } = req.params;
    let article = slug.split("-").join(" ").toUpperCase();
    console.log(req.params);
    res.send(
        `
    <h6>Username: ${username}</h6>
    <h6>Article: ${article}</h6>
    <h6>Slug: ${slug}</h6>
    `
    );
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});