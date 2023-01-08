import React from 'react';

import Navigation from '../../layout/Navigation/Navigation';

import floheader from '../../../images/Flo-header.png';

import "./header.css";

function Header() {
    return (
    <>
        
        <div className="header">
            <Navigation />
            <img className="slogan" src={floheader} alt="slogan" />
        </div>
    </>
        
    )
}

export default Header