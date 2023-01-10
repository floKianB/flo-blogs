import React from 'react';
import { Link } from 'react-router-dom';
import "./navigation.css";

import account from "../../../images/account.png";
import logo from '../../../images/Flo.png';

const Navigation = () => {
    
    return (
        <div className='NavigationContainer'>
            <nav className="navigation">
                <img className="logo" height="55" src={logo} alt="flo-logo"/>
                <div class="links">
                    <Link to="/home"><p>Home</p></Link>
                    <Link to="/home"><p>Blogs</p></Link>
                    <Link to="/home"><p>Contact Us</p></Link>
                </div>
                <img src={account} alt="account icon" className='accountIcon'/>
            </nav>
        </div>   
    )
}

export default Navigation;