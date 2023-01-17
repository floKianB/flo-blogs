import React from 'react';
import "./addComment.css";

function AddComment() {
    return (
        <form>
            <input placeholder="Name" className="nameInput" type="text" name="name" required/>
            <input placeholder="Email" className="emailInput" type="email" name="email" required/>
            <textarea placeholder="Comment" className="commentInput" type="text" name="comment" rows="4" required/>
        </form>
    )
}

export default AddComment;