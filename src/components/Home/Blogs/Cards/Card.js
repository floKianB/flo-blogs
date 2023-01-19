import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import authorIcon from "../../../../images/authorIcon.png";
import calendarIcon from "../../../../images/calendar.png";

import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
// Star Widget Generator Library
import Stars from '../../../Utils/Stars';
import './card.css'


const CardComponent = ({title, postSlug, coverPhoto, author, id, description, stars, saveStatus, tag, timeToRead, datePublished}) => {
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
                <span className="saveIcon">
                    { save ? <TurnedInIcon onClick={()=> unsavePost()} color='warning' /> : <TurnedInNotIcon onClick={()=> savePost()}/> }
                </span>
                <p className="timeToRead">{timeToRead} min</p>

                <Link to={`/blog/${postSlug}`}>
                    <img className="poster" src={coverPhoto.url} alt={postSlug}/>      {/* Cover posters need to be a deigned thunbnail with title */}
                </Link>
                <span className="underPoster">
                    <p>{tag}</p>
                    <Stars color='red' postStars={stars} size={24}/>
                </span>
                
                <Link to={`/blog/${postSlug}`} className="secondLinkToPost">
                    <p className='blogTitle'>
                        {shortenDescription(title)}
                    </p>
                </Link>
                
                <div className="metaData">
                    <span className='authorSection'>
                        <img src={authorIcon} alt="author" className="authorIcon"/>
                        <p className="nameAuthor">{author.name}</p>
                    </span>
                    <span className='dateSection'>
                        <img src={calendarIcon} alt="calendar" className="calendarIcon"/>
                        <p className="date">{datePublished.replaceAll('-','/')}</p>
                    </span>
                </div>
                
                
            </div>
        </>
    );
}

export default CardComponent;