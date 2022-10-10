import {useRef} from 'react';

export default function FormInput({handleAddBlog}) {
    const authorRef = useRef(null);
    const tittleRef = useRef(null);
    const contentRef = useRef(null);
    
    function handleClick() {
        handleAddBlog(authorRef.current.value, tittleRef.current.value, contentRef.current.value);
    }
    
    return (
        <div className='form-container'>
            <div className='form-info-grid'>
                <label className="grid-item" htmlFor='author'>Author</label>
                <input ref={authorRef} className="grid-item" type="text" name="Author" id='author'/>
                <label className="grid-item" htmlFor='title'>Title</label>
                <input ref={tittleRef} className="grid-item" type="text" name="name" id='title'/>
                <label className="grid-item" htmlFor='content'>Content</label>
                <textarea ref={contentRef} className="grid-item" type="text" name="content" id='content'/>
            </div>
            <div className='from-create-post-container'>
                <button onClick={handleClick} className='btn blue-btn'>Create post</button>
            </div>

        </div>
    )
}
