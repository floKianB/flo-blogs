import React, { useState, useEffect } from 'react'
import ReactStars from "react-rating-stars-component";
import { POSTS_FROM_STARS } from '../Home/Redux/postsActions';
import { useDispatch } from 'react-redux';

const EditAbleStar = () => {
    const dispatch = useDispatch();
    const [filtteredStarsPosts, setFiltteredStarsPosts] = useState(0);

    useEffect(()=>{
        dispatch(POSTS_FROM_STARS(filtteredStarsPosts));
    }, [filtteredStarsPosts])


    const filterStars = (newRating) => {
        setFiltteredStarsPosts(newRating);
    };
    
    return (
        <ReactStars
            count={5}
            edit={true}
            half={false}
            value={0}
            size={30}
            activeColor="#ffff"
            onChange={filterStars}
        />
    )
}

export default EditAbleStar