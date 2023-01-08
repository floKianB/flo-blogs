import React from 'react';
import "./navigation.css";

import account from "../../images/account.png";
import logo from '../../images/flo.png';

const Navigation = () => {
    
    return (
            <nav className="navigation">
            <img className="logo" height="60" src={logo} alt="flo-logo"/>
            <div class="links">
                <p className="eachLink">Categories</p>
                <p className="eachLink">Authors</p>
                <p className="eachLink">Contact Us</p>
            </div>
            <img src={account} alt="account icon" className='accountIcon'/>
        </nav>
        
    )
}

export default Navigation;