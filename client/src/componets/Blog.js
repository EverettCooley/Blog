import React from 'react'
import Comment from './Comment.js'

export default function Blog(props) {
    const {
        title,
        content,
        author,
        timeCreated,
        likes,
        comments
      } = props
  return (
    <div className="blog">
        <div className="header">
            <h1 className="blog-title">{title}</h1>
        </div>
        <div className="blog-content blog-item">{content}</div>
        <div className="footer">
            <div className="blog-author blog-item">Created by {author} at {timeCreated}</div>
            <div className="blog-likes blog-item">Likes: {likes}</div>
        </div>
        <div>        
            {comments.map(comment => {
                return (<Comment key={comment.id} {...comment}/>) 
            })}
        </div>
    </div>
  )
}
