import React from 'react'
import Blog from './Blog.js'

export default function BlogsList({blogs, handleAddBlog}) {
  return (
    <div className="blogs-container">
        {/* <button onClick={handleAddBlog}>Add Blog</button> */}
        {blogs.map(blog => {
           return (<Blog key={blog.id} {...blog}/>) 
        })}
    </div>
  )
}
