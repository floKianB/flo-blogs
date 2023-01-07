import React from 'react';
import "./navigation.css";

import logo from '../../images/Flo.png';
import saveIcon from '../../images/save-icon.png';

const Navigation = () => {
    
    return (
        <div className="navigationHolder">
            <nav className="navigation">
            <img className="logo" height="60" src={logo} alt="flo-logo"/>
            <div class="links">
                <p className="eachLink">Categories</p>
                <p className="eachLink">Authors</p>
                <p className="eachLink">Contact Us</p>
            </div>
            <img src={saveIcon} className="savedBlogs"/>
        </nav>
        </div>
        
    )
}

export default Navigation;