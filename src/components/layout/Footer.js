import React from 'react';
import { Typography } from '@mui/material';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'lightgray', width: '100%', position: 'relative', bottom: '0'}}>
            <Typography component="p" color="primary" padding="10px" textAlign="center">
                Flo-Blogs where student express themselves to experts
            </Typography>
        </footer>
    )
}

export default Footer