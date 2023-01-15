import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./navigation.css";

import account from "../../../images/account.png";
import logo from '../../../images/Flo.png';

const Navigation = () => {
    const location = useLocation().pathname;
    console.log(location)
    return (
        <div className='NavigationContainer'>
            <nav className="navigation">
                <img className="logo" height="55" src={logo} alt="flo-logo"/>
                <div class="links">
                    <Link to="/home"><p className={ location === '/home' ? "activeNavigator" : "eachNavigator"} >Home</p></Link>
                    <Link to="/blogs"><p className={ location === '/blogs' ? "activeNavigator" : "eachNavigator"} >Blogs</p></Link>
                    <Link to="/contactUs"><p className={ location === '/contactUs' ? "activeNavigator" : "eachNavigator"} >Contact Us</p></Link>
                </div>
                <img src={account} alt="account icon" className='accountIcon'/>
            </nav>
        </div>   
    )
}

export default Navigation;