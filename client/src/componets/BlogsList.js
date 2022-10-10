import React from 'react'
import Blog from './Blog.js'

export default function BlogsList({blogs, handleAddBlog}) {
  console.log(blogs)
  blogs.reverse()
  return (
    <div className="blogs-container">
        {blogs.map(blog => {
           return (<Blog key={blog.id} {...blog}/>) 
        })}
    </div>
  )
}
