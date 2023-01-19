import React from 'react';
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';

const index = ({ children }) => {
    return (
        <>
            <Navigation />
            {children}
            {/* <Footer /> */}
        </>
        
    )
}

export default index