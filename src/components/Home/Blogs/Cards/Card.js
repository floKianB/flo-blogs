import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Divider from '@mui/material/Divider';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
// Star Widget Generator Library
import Stars from '../../../Utils/Stars';
import './card.css'


const CardComponent = ({title, postSlug, coverPhoto, author, id, description, stars, saveStatus, tag, timeToRead}) => {
    const [save, setSave] = useState(saveStatus);                                   // Set state for the saving status of the current card
    // SAVE-POST and UN-SAVE-POST functions (on buttons) which will save and un-save the CARD-ID in local storage 
    const savePost = () => {
        if((localStorage.getItem('savedPostsID')) === null){
            localStorage.setItem('savedPostsID', JSON.stringify([postSlug]));
        } else {
            const savedPosts = JSON.parse(localStorage.getItem('savedPostsID'));
            savedPosts.push(postSlug);
            localStorage.setItem('savedPostsID', JSON.stringify(savedPosts));
        }
        setSave(!save);
    }
    const unsavePost = () => {
        const savedPosts = JSON.parse(localStorage.getItem('savedPostsID'));
        const edittedList = savedPosts.filter(eachItem => eachItem !== postSlug)
        localStorage.setItem('savedPostsID', JSON.stringify(edittedList))
        setSave(!save);
    }
    console.log(timeToRead);
    const shortenDescription = (description) => {
        if(description.length < 100){
            return description;
        }
        else{
            return description.slice(0, 100) + '...'
        }
    }

    return (
        <>
            <div className='card' key={id}>
                <Link to={`/blog/${postSlug}`}>
                    <img className="poster" src={coverPhoto.url} alt={postSlug}/>      {/* Cover posters need to be a deigned thunbnail with title */}
                </Link>
                <Link to={`/author/${author.authorSlug}`}>
                    <div className='authorSection'>
                        <img className='authorImage' src={author.profilePhoto.url} alt='author'/>
                        <div className='authorID'>
                            <p className='authorName'>{author.name}</p>
                            <p className='authorField'>{author.field}</p>
                        </div>
                            <p className='timeToRead'>{timeToRead} min</p>
                    </div>
                </Link>
                <Link to={`/blog/${postSlug}`} className="secondLinkToPost">
                    <p className='description'>
                        {shortenDescription(description)}
                    </p>
                </Link>
                <Divider className='divider' textAlign="center">{tag}</Divider>
                <div className='downContainer'>
                    <Stars color='red' postStars={stars} size={24}/>
                    <span style = {{ display: "flex", gap: '5px'}}>
                        { save ? <TurnedInIcon onClick={()=> unsavePost()} color='warning' /> : <TurnedInNotIcon onClick={()=> savePost()}/> }
                    </span>
                </div>
            </div>
        </>
    );
}

export default CardComponent;