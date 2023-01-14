import React from 'react';
import "./PageHub.css";

import Navigation from '../../Navigation/Navigation';

import mainHubImage from "../../images/MainHubBG.jpg";

function PageHub() {
    return (
        <>
            <Navigation />
            <main className="mainHub">
                {/* <img src={mainHubImage} className="mainHubImage" /> */}
            </main>
        </>
        
    )
}

export default PageHub