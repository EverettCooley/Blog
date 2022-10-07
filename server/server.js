require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");

// middleware
app.use(cors());
app.use(express.json());

// routes
// add title
app.post("/newPost", async (req, res) => {
    try {
        console.log(req.body);
        const { title, content } = req.body;
        const newBlog = await db.query(
            "INSERT INTO blogs(title, content) VALUES($1, $2) RETURNING *",
            [title, content]
        );

        res.json(newBlog.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// get all titles
app.get("/blogs", async (req, res) => {
    try {
        const allTitles = await db.query("SELECT * FROM blogs");
        res.json(allTitles.rows);
    } catch (err) {
        console.error(err.message);
    }
});
const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log("server has started");
});
