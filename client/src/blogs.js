import React, { Fragment, useEffect, useState } from "react";

const ListBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    const getBlogs = async () => {
        const url =
            process.env.NODE_ENV === "production"
                ? "/blogs"
                : "http://localhost:5001/blogs";
        try {
            const response = await fetch(url);
            const jsonData = await response.json();
            setBlogs(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getBlogs();
    }, []);

    console.log(blogs);

    const blogsContainer = {
        display: "flex",
        "flex-direction": "column",
    };

    const blogContainer = {
        display: "flex",
        "flex-direction": "column",
        margin: "50px",
    };

    return (
        <Fragment>
            {" "}
            <div style={blogsContainer}>
                {blogs.map((blog) => (
                    <div key={blog.blog_id} style={blogContainer}>
                        <div>{blog.title}</div>
                        <div>{blog.content}</div>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

export default ListBlogs;
