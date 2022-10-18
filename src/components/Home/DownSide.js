import React from 'react'
import { Card } from '@mui/material';

const DownSide = () => {
    return (
        <Card item sx={{ backgroundColor: 'rgb(24,118,209,0.9)', width: '100%', minHeight: '150px', my: 5 }}>
            <p style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold', margin: '15px 0', textAlign: 'center'}}>
                Authors
            </p>
        </Card>
    )
}

export default DownSide;