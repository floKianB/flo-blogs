import React from 'react';
import "./comment.css";
function Comment({name, content}) {
    return (
        <div className="comment"> 
            <div className='profilePic'>
                {name.charAt(0).toUpperCase()}
            </div>
            <div>
                <h2 className='commentName'>{name}</h2>
                <p className='commentContent'>{content}</p>
            </div>
            
        </div>
        
    )
}

export default Comment