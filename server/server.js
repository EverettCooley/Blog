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
app.post("/api/newPost", async (req, res) => {
    try {
        console.log(req.body);
        const { title, content, author } = req.body;
        const newBlog = await db.query(
            "INSERT INTO blogs(title, content, author, likes) VALUES($1, $2, $3, 0) RETURNING *",
            [title, content, author]
        );
        res.json(newBlog.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// get all titles
app.get("/api/getBlogs", async (req, res) => {
    try {
        const allTitles = await db.query("SELECT * FROM blogs ORDER BY id DESC");
        res.json(allTitles.rows);
    } catch (err) {
        console.error(err.message); 
    }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log("server has started");
});
