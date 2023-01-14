import React from 'react';
import "./navigation.css";

import Navigator from "./Navigator.js";

import menue from "../images/menue.png";
import logo from '../images/Flo.png';

const Navigation = () => {
    
    return (
        <>
            <nav>
                <Navigator />
            </nav>
            
            <div className='NavigationContainer'>
                <nav className="navigation">
                    <img className="logo" height="55" src={logo} alt="flo-logo"/>
                    <div class="links">
                        <p>Home</p>
                        <p>Blogs</p>
                        <p>Contact Us</p>
                    </div>
                    <img src={menue} alt="menue" className='menueIcon'/>
                </nav>
            </div>   
        </>
        
    )
}

export default Navigation;