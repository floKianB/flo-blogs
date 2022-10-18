import React from 'react'
import { Card } from '@mui/material';
const HeaderFilter = () => {
    return (
        <Card item xs={12} md={3} mt={4} mb={2} sx={{ mb: 3 }} style={{ backgroundColor: 'rgb(24,118,209,0.9)' }}>
            <p style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold', margin: '15px 0', textAlign: 'center' }}>
                Filters
            </p>
        </Card>
    )
}

export default HeaderFilter;