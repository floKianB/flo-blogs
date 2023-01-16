import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./navigation.css";
import ClearIcon from '@mui/icons-material/Clear';

import account from "../../../images/account.png";
import logo from '../../../images/Flo.png';
import menue from "../../../images/menue.png";

const Navigation = () => {
    const [navStatus, setNavStatus] = useState({left: "-100vw"})
    const location = useLocation().pathname;
    const shiftNavigation = () => {
        setNavStatus({left: "0px"})
    }
    const closeShiftedNavigator = () => {
        setNavStatus({left: "-100vw"})
    }
    return (
        <div className='NavigationContainer'>
            <nav className="navigation">
                <img src={menue} className='menue' alt="menue" onClick={shiftNavigation} />
                <img className="logo" height="55" src={logo} alt="flo-logo"/>
                <div className="links">
                    <Link className="link" to="/home"><p className={ location === '/home' ? "activeNavigator" : "eachNavigator"} >Home</p></Link>
                    <Link className="link" to="/blogs"><p className={ location === '/blogs' ? "activeNavigator" : "eachNavigator"} >Blogs</p></Link>
                    <Link className="link" to="/contactUs"><p className={ location === '/contactUs' ? "activeNavigator" : "eachNavigator"} >Contact Us</p></Link>
                </div>
                {/* ======================================================= */}
                <div className="shiftNavigator" style={navStatus}>
                    <div className="topNavigator">
                        <img className="logoNavigation" height="55" src={logo} alt="flo-logo"/>
                        <ClearIcon 
                            class= "closeButton"
                            fontSize="large"
                            sx={{
                                color: '#ffff', 
                                backgroundColor: 'black', 
                                borderRadius: '50%',
                                cursor: 'pointer',
                            }}
                            onClick={closeShiftedNavigator}
                        />
                    </div>
                    <Link to="/home"><p className={ location === '/home' ? "activeShiftedNavigator" : "eachShiftedNavigator"} >Home</p></Link>
                    <Link to="/blogs"><p className={ location === '/blogs' ? "activeShiftedNavigator" : "eachShiftedNavigator"} >Blogs</p></Link>
                    <Link to="/contactUs"><p className={ location === '/contactUs' ? "activeShiftedNavigator" : "eachShiftedNavigator"} >Contact Us</p></Link>
                </div>
                <img src={account} alt="account icon" className='accountIcon'/>
                
            </nav>
        </div>   
    )
}

export default Navigation;