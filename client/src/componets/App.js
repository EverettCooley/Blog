import React from "react";
import BlogsList from "./BlogsList";
import '../css/app.css'

function App() {
    return (
        <>
            <div className="container">
                <BlogsList blogs={sampleBlogs}/>
            </div>
        </>
    );
}

const sampleBlogs = [
    {
      id: 1,
      title: 'How to make a chair',
      content: "1. Assemble it",
      author: 'Everett Cooley',
    //   change time to be time oject
      timeCreated: "10:30",
      likes: 0, 
      comments: [
        {
          id: 1,
          author: 'Lily',
          content: 'What happens if you dont make it this way?',
          comments: []
        },
        {
          id: 2,
          author: 'abby',
          content: 'this is so well done',
          comments: [{
            id: 3,
            author: 'Lily',
            content: 'W?',
            comments: []
            }
          ]
        }
      ]
    },
    {
        id: 2,
        title: 'How to a desk',
        content: "1. Make it",
        author: 'Everett Cooley',
      //   change time to be time oject
        timeCreated: "3:30",
        likes: 0, 
        comments: [
          {
            id: 1,
            author: 'Lily',
            content: 'W?',
            comments: []
          },
          {
            id: 2,
            author: 'abby',
            content: 'great',
            comments: []
          }
        ]
      }
  ]

export default App;
