import React, { useState } from 'react';
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
      
    const [likes_count, setLikes] = useState(likes);
  return (
    <div className="blog">
        <div className="header">
            <h1 className="blog-title">{title}</h1>
        </div>
        <div className="blog-content blog-item">{content}</div>
        <div className="footer">
            <div className="blog-author blog-item">Created by {author} at {timeCreated}</div>
            <button className="blog-likes blog-item btn blue-btn" onClick={() => setLikes(prevLikes => prevLikes + 1)}> 
                Likes {likes_count}
            </button>
        </div>
        <div>        
            {comments.map(comment => {
                return (<Comment key={comment.id} {...comment}/>) 
            })}
        </div>
    </div>
  )
}
