import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import "./blogPage.css";

import { GET_POST_BY_SLUG } from '../../GraphQL/queries';

import sanitizeHtml from "sanitize-html"; 
import ClearIcon from '@mui/icons-material/Clear';
import Stars from '../../Utils/Stars';
import Comment from './Comment/Comment';

const BlogPage = () => {
    const { slug } = useParams();
    const { loading, data, errors } = useQuery(GET_POST_BY_SLUG, {variables: { postSlug: slug }});
    const navigate = useNavigate();
    if(loading) { return <h1> Loading... </h1>}
    if(errors) { return <h1> {errors} </h1>}
    else{
        console.log(data.post.comment)

        return (
        <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap" rel="stylesheet" />        
        
        <div className="blogContainer">
                {/* Title */}
                <div className="titleSection" >
                    <h1 className="title">{data.post.title}</h1>
                    <ClearIcon 
                        fontSize="large"
                        sx={{   
                            color: 'black', 
                            backgroundColor: 'rgb(255, 102, 0)', 
                            borderRadius: '50%',
                            cursor: 'pointer',
                        }} 
                        onClick={() => navigate(-1)} 
                    />
                </div>
                {/* Header */}
                <header className='headerSection'>
                    <img src={data.post.coverPhoto.url} alt={data.post.title} className="coverImage"/>
                    <div className='headerMetaData'>
                        <p className='publishDate'>{data.post.datePublished.replaceAll("-", "/")}</p>
                        <p className='timeToReadBlog'>{data.post.timeToRead} min</p>
                    </div>
                </header>
                {/* Author */}
                <div className='authSection'>
                    <div className='authorIDSection'>
                        <img className='image' src={data.post.author.profilePhoto.url} alt={data.post.author.name}/>
                        <div className='ID'>
                            <p className='name'>{data.post.author.name}</p>
                            <p className='field'>{data.post.author.field}</p>
                        </div>
                    </div>
                    <div className='starsContainer'>
                        <Stars postStars={data.post.stars} size={30} className='stars'/> 
                    </div>
                </div>
                {/* Blog Content */}
                <div dangerouslySetInnerHTML={{__html: sanitizeHtml(data.post.content.html)}} className='blogContent'></div>
                {/* Comments */}
                <div className='comments'>
                    <h2 className="CommentsTop">Comments</h2>
                    <hr/>
                    {
                        data.post.comment.map((eachComment, index) => <Comment key={index} name={eachComment.name} content={eachComment.content}/>)  
                    }
                </div>
        </div>

        </>
            
        )
    }
}

export default BlogPage;