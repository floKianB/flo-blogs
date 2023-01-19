import React, {useState} from 'react';
import "./blogs.css";
// MUI 
import { Grid } from '@mui/material';
import CardComponent from './Cards/Card';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import searchIcon from "../../../images/search.png";
import loadingSpinner from "../../../images/loadSpinner.gif";

const Blogs = () => {
    
    // Get posts from our REDUX STORE
    const recivedPosts = useSelector(state => state.postsInfo.posts);
    // initial store for all posts
    const [activePosts, setActivePosts] = useState(recivedPosts);
    // Load all posts from GraphQL API when we recived them from REDUX THUNK store.posts
    useEffect(() => {
        setActivePosts(recivedPosts);
    }, [recivedPosts])
    // Load filltered posts after any changes applied to our REDUX THUNK store.fillteredPosts
    const search = (event) => {
        const searchedPosts = recivedPosts.filter(eachPost => eachPost.title.toUpperCase().includes(event.target.value.toUpperCase()))
        setActivePosts(searchedPosts)
    }
    
    return (
        <>
            <div className="searchContainer">
                <img src={searchIcon} alt="search" className='searchIcon'/>
                <input type="text" className='search' placeholder='Search...' onChange={search}/>
            </div>
            
            {/* Blogs holder - 3Column || 2Column || 1Column */}
            <Grid container spacing={5} className="BlogsContainer">
                {
                (activePosts.length !== 0) ?
                    (
                        activePosts.map((post, index) => {                                                          // depends on ACTIVE-POSTS (filtered or all blogs) ...
                            if(JSON.parse(localStorage.getItem('savedPostsID')) !== null){
                                if(JSON.parse(localStorage.getItem('savedPostsID')).includes(post.postSlug)){       // This inner condition is to check if the post has saved by user or not
                                    return (
                                        <Grid item xs={12} sm={6} md={4} key={post.id}>
                                            <CardComponent key={index} {...post} saveStatus={true} />
                                        </Grid>
                                    )
                                } else {
                                    return (
                                        <Grid item xs={12} sm={6} md={4} key={post.id}>
                                            <CardComponent key={index} {...post} saveStatus={false} />
                                        </Grid>
                                    )                            
                                }
                            }
                            return (
                                <Grid item xs={12} sm={6} md={4} key={post.id}>
                                    <CardComponent key={index} {...post} saveStatus={false} />
                                </Grid>
                            );
                        })
                    ) : <img src={loadingSpinner} alt="loading" className="loadSpinner"/>
                }
            </Grid>
        </>
    )
}

export default Blogs;