import React, { useEffect, useState } from 'react';
import "./savedBlogs.css";
import { FETCH_POSTS } from '../Home/Redux/postsActions';

import { useDispatch, useSelector } from 'react-redux';
import loadingSpinner from "../../../images/loadSpinner.gif";
import CardComponent from '../../layout/Cards/Card';
import BlogsContainer from '../../layout/BlogsContainer/BlogsContainer';

function SavedPosts() {
    const dispatch = useDispatch();
    const recivedPosts = useSelector((state) => state.postsInfo.posts);
    dispatch(FETCH_POSTS(recivedPosts));
    const [activePosts, setActivePosts] = useState(recivedPosts)
    useEffect(()=>{
        setActivePosts(recivedPosts)
    }, [recivedPosts])
    
    return (
        <BlogsContainer>
            {
                (activePosts.length !== 0) ?
                    (
                        activePosts.map((post, index) => {                                                          // depends on ACTIVE-POSTS (filtered or all blogs) ...
                            if(JSON.parse(localStorage.getItem('savedPostsID')) !== null){
                                if(JSON.parse(localStorage.getItem('savedPostsID')).includes(post.postSlug)){       // This inner condition is to check if the post has saved by user or not
                                    return (
                                        <div className='eachCard' key={post.id}>
                                            <CardComponent key={index} {...post} saveStatus={true} />
                                        </div>
                                    )
                                }
                            }
                            
                        })
                    ) : <img src={loadingSpinner} alt="loading" className="loadSpinner"/>
            }
        </BlogsContainer>
    )
}

export default SavedPosts