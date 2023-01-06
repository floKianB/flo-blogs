import React from 'react';

import { Grid, Container } from '@mui/material';
import Blogs from './Blogs';
import Filters from './Filters/Filters';
import { FETCH_POSTS } from './Redux/postsActions';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts );

    dispatch(FETCH_POSTS(posts));

    return (
            <Container maxWidth="lg">
                {/* <Grid container spacing={4}>
                    <Grid item xs={12} md={3} mt={4}>
                        <Filters />
                    </Grid> */}
                    <Grid item xs={12} md={9} mt={4} >
                        <Blogs />
                    </Grid>
                {/* </Grid> */}
            </Container>
    )
}

export default Home