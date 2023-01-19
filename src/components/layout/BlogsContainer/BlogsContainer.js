import React from 'react';
import "./blogsContainer.css";

function BlogsContainer({ children }) {
    return (
        <div className="blogsContainer">
            {children}
        </div>
    )
}

export default BlogsContainer