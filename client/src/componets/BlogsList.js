import React from 'react'
import Blog from './Blog.js'

export default function BlogsList({blogs}) {
  return (
    <div>
        {blogs.map(blog => {
           return (<Blog key={blog.id} {...blog}/>) 
        })}
    </div>
  )
}
