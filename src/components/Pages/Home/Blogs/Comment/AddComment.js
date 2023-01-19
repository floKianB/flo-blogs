import { useMutation } from '@apollo/client';
import React from 'react';
import { useState } from 'react';
import "./addComment.css";
import { COMMENT_ON_POST } from "../../../../GraphQL/mutations";


function AddComment({ slug }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")
    const [sendComment, {loading, data, errors}] = useMutation(COMMENT_ON_POST, {variables: {name, email, text, slug}})
    const submitHandler = () => {
        sendComment();
    }
    
    return (
        <form>
            <input placeholder="Name" className="nameInput" type="text" name="name" onChange={(event) => setName(event.target.value)} required/>
            <input placeholder="Email" className="emailInput" type="email" name="email" onChange={(event) => setEmail(event.target.value)} required/>
            <textarea placeholder="Comment" className="commentInput" type="text" name="text" rows="4" onChange={(event) => setText(event.target.value)} required/>
            <button className="submitBtn" onClick={submitHandler}>Submit</button>
        </form>
    )
}

export default AddComment;