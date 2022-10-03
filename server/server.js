const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

// routes

// add title
app.post("/newPost", async (req, res) => {
    // req.body = {
    //     title: "watermelons are better",
    // };
    try {
        console.log(req.body);
        const { title, content } = req.body;
        const newBlog = await pool.query(
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
        const allTitles = await pool.query("SELECT * FROM blogs");
        res.json(allTitles.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(5001, () => {
    console.log("server has started on port 5001");
});
