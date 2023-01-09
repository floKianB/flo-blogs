import React from 'react';


import floheader from '../../../images/Flo-header.png';
import "./header.css";

function Header() {
    return (
    <>
        <div className="headerContainer">
            <div className="header">
                <img className="slogan" src={floheader} alt="slogan" />
            </div>
        </div>
    </>
        
    )
}

export default Header