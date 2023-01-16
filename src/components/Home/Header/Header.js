import React from 'react';


import floheader from '../../../images/Flo-header.png';
import slogan from '../../../images/slogan.png';
import "./header.css";

function Header() {
    return (
    <>
        <div className="headerContainer">
            <div className="header">
                <img className="floHeader" src={floheader} alt="slogan"/>
                <img className="slogan" src={slogan} alt="slogan"/>
            </div>
        </div>
    </>
        
    )
}

export default Header