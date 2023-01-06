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


const CardComponent = ({title, postSlug, coverPhoto, author, id, description, stars, saveStatus}) => {
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
            <Link to={`/blog/${postSlug}`} style={{ textDecoration: 'none', position: 'relative'}}>
                <CardMedia component="img" maxheight="180" image={coverPhoto.url} alt={postSlug}/>      {/* Cover posters need to be a deigned thunbnail with title */}
            </Link>
            <Card style={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: "0px", padding: '7px 0'}} key={id}>
                <Link to={`/author/${author.authorSlug}`} style={{ textDecoration: 'none', height: '60px' }}>
                    <CardHeader 
                        style={{ padding: '15px'}}
                        avatar={<Avatar src={author.profilePhoto.url} />} 
                        title={<Typography component="p" variant="p" color="text.primary" style={{ margin: 0, }}>{author.name}<br/><p style={{ fontSize: "0.75rem", margin: 0, color: '#3a3b3c'}}>{author.field}</p></Typography>}
                    />
                </Link>
                <Link to={`/blog/${postSlug}`} style={{ textDecoration: 'none', position: 'relative'}}>
                    <CardContent compoenum="p" variant="p" style={{ color:"#3a3b3c", fontWeight: '300', fontSize: '0.9rem', textAlign: "justify", padding: '0 15px', minHeight: '80px'}}>
                        {description}
                    </CardContent>
                </Link>
                <Divider style={{ padding: '10px 0', fontSize: '0.85rem'}} textAlign="center">Post Tag</Divider>
                <div style = {{ display: "flex", justifyContent: "space-between", padding: '0 15px'}}>
                    <Stars postStars={stars} size={24}/>
                    <span style = {{ display: "flex", gap: '5px'}}>
                        { save ? <TurnedInIcon onClick={()=> unsavePost()} color="primary" /> : <TurnedInNotIcon onClick={()=> savePost()}/> }
                    </span>
                </div>
            </Card>
        </>
    );
}

export default CardComponent;