import React, { useState } from 'react';
import "./navigation.css";

import menue from "../images/menue.png";
import logo from '../images/Flo.png';

const Navigation = () => {
    const [rightPosition, setRightPosition] = useState({right: '100vw'})
    const shiftNavigators = () => {
        setRightPosition({right: '0vw'})
        console.log("Open Navigator")
    }

    return (
        <>
            <div className="navigator" style={rightPosition}>
                <div className="eachNavigatorContainer1"><p className="eachNavigator1">Paint Clone</p></div>
                <div className="eachNavigatorContainer2"><p className="eachNavigator2">Quote Generator</p></div>
                <div className="eachNavigatorContainer3"><p className="eachNavigator3">Joke Teller</p></div>
                <div className="eachNavigatorContainer4"><p className="eachNavigator4">Music Player</p></div>
                <div className="eachNavigatorContainer5"><p className="eachNavigator5">Drag and Drop</p></div>
            </div>
            
            <div className='NavigationContainer'>
                <nav className="navigation">
                    <img className="logo" height="55" src={logo} alt="flo-logo"/>
                    <div class="links">
                        <p>Home</p>
                        <p>Blogs</p>
                        <p>Contact Us</p>
                    </div>
                    <img src={menue} alt="menue" className='menueIcon' onClick={shiftNavigators}/>
                </nav>
            </div>   
        </>
        
    )
}

export default Navigation;