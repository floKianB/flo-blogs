import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// MUI
import {
    Card,
    CardHeader,
    CardContent,
    CardMedia,
    Avatar,
    Typography,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
// Star Widget Generator Library
import Stars from '../Utils/Stars';
import './card.css'


const CardComponent = ({title, postSlug, coverPhoto, author, id, description, stars, saveStatus, tag}) => {
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

    return (
        <>
            <div className='card' key={id}>
                <Link to={`/blog/${postSlug}`}>
                    <CardMedia component="img" className="poster" image={coverPhoto.url} alt={postSlug}/>      {/* Cover posters need to be a deigned thunbnail with title */}
                </Link>
                <Link to={`/author/${author.authorSlug}`}>
                    <CardHeader 
                        className='authorSection'
                        avatar={<Avatar src={author.profilePhoto.url} />} 
                        title={<Typography component="p" variant="p" style={{ margin: 0, padding: 0}}>{author.name}<br/><p style={{ fontSize: "0.75rem", margin: 0, padding: '0'}}>{author.field}</p></Typography>}
                    />
                </Link>
                <Link to={`/blog/${postSlug}`} className="secondLinkToPost">
                    <p className='description'>
                        {description}
                    </p>
                </Link>
                <Divider className='divider' textAlign="center">{tag}</Divider>
                <div className='downContainer'>
                    <Stars postStars={stars} size={24}/>
                    <span style = {{ display: "flex", gap: '5px'}}>
                        { save ? <TurnedInIcon onClick={()=> unsavePost()} color="primary" /> : <TurnedInNotIcon onClick={()=> savePost()}/> }
                    </span>
                </div>
            </div>
        </>
    );
}

export default CardComponent;