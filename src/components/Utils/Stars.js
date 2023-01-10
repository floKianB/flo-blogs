import React from 'react'
import ReactStars from "react-rating-stars-component";

const Stars = ({postStars, size}) => {
    return (
        <ReactStars
            count={5}
            edit={false}
            half={true}
            value={postStars}
            size={size}
            activeColor="#FF8000"
        />
    )
}

export default Stars;