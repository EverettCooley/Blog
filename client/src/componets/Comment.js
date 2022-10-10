import React from 'react'

export default function Comment({author, content, comments}) {
  return (
    <div className='comment'>
        <div >comments below:</div>
        <span>{author}</span>
        <span>{content}</span>
        <div>
            {comments.map(comment => {
                return (<Comment key={comment.id} {...comment}/>) 
            })}
        </div>
    </div>
  )
}
