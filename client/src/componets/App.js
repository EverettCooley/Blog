import React, { useState } from 'react';
import BlogsList from "./BlogsList";
import FormInput from './FormInput';
import '../css/app.css'
import { v4 as uuidv4 } from 'uuid';


function App() {
    const [blogs, setBlogs] = useState(sampleBlogs);

    function handleAddBlog(author, title, content) {
        const newBlog = {
            id: uuidv4(),
            title: title,
            content: content,
            author: author,
            timeCreated: "2",
            likes: 0,
            comments: []
        }
        setBlogs([newBlog, ...blogs])
    }

    return (
        <>
            <FormInput handleAddBlog={handleAddBlog}></FormInput>
            <BlogsList blogs={blogs}/>
        </>
    );


}


const sampleBlogs = [
    {
      id: 1,
      title: 'How to make a chair',
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      author: 'Everett Cooley',
    //   change time to be time oject
      timeCreated: "10:30",
      likes: 0, 
      comments: [
        {
          id: 1,
          author: 'Lily',
          content: "hello",
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
