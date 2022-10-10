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
    <div>
        <div>{title}</div>
        <div>{content}</div>
        <div>{author}</div>
        <div>{timeCreated}</div>
        <div>{likes}</div>
        <div>        
            {comments.map(comment => {
                return (<Comment key={comment.id} {...comment}/>) 
            })}
        </div>
    </div>
  )
}
