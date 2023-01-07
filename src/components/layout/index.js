import React from 'react'
import Footer from './Footer'
import Navigation from './Navigation'

const index = ({ children }) => {
    return (
        <>
            <Navigation />
            {children}
            <Footer />
        </>
        
    )
}

export default index