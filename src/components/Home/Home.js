import React from 'react';

import { Grid, Container } from '@mui/material';
import Blogs from './Blogs';
import { FETCH_POSTS } from './Redux/postsActions';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts );

    dispatch(FETCH_POSTS(posts));

    return (
            <Container maxWidth="lg">
                <Grid item xs={12} mb={7} mt={10} >
                    <Blogs />
                </Grid>
            </Container>
    )
}

export default Home