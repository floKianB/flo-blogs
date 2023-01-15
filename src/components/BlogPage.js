import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GET_POST_BY_SLUG } from './GraphQL/queries';
import sanitizeHtml from "sanitize-html"; 
import { Typography, Grid, Container, Avatar, Box } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import Stars from './Utils/Stars';

const BlogPage = () => {
    const { slug } = useParams();
    const { loading, data, errors } = useQuery(GET_POST_BY_SLUG, {variables: { postSlug: slug }});
    const navigate = useNavigate();
    if(loading) { return <h1> Loading... </h1>}
    if(errors) { return <h1> {errors} </h1>}
    else{
        return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin = "true"/>
            <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap" rel="stylesheet"/>
        
        <Container maxWidth="lg">
            <Grid container>
                <Grid item xs={12} mt={9} display="flex" justifyContent="space-between" alignItems="center" style={{marginTop: '150px'}} >
                    <Typography 
                        component="h1" 
                        variant="h2" 
                        color="black"
                    >
                        {data.post.title}
                    </Typography>
                    <ClearIcon 
                        fontSize="large"
                        sx={{   
                            color: 'black', 
                            backgroundColor: 'red', 
                            borderRadius: '50%',
                            cursor: 'pointer',
                        }} 
                        onClick={() => navigate(-1)} 
                    />
                </Grid>
                <Grid item xs={12} mt={8} >
                    <img src={data.post.coverPhoto.url}
                        alt={data.post.title}
                        width='100%' 
                        style={{ 
                            borderRadius: '15px',
                            marginBottom: '10px'
                        }}
                    />
                    <Box componen="div" width="100%" display="flex" justifyContent="space-between" alignItems="center">
                        <Typography 
                            width="fit-content"
                            sx={{
                                color: 'white',
                                backgroundColor: 'gray',
                                padding: '5px 10px',
                                borderRadius: '20px'
                            }}
                        >
                            Published on: {data.post.datePublished.replaceAll("-", "/")}
                        </Typography>
                    </Box>
                    
                    
                </Grid>
                <Grid item width="100%" sx={12} my={4} display="flex" alignItems="center" justifyContent="space-between">
                    <Box component="div" display="flex" alignItems="center">
                        <Avatar 
                            src={data.post.author.profilePhoto.url} 
                            alt={data.post.author.name}
                            sx = {{
                                width: '80px',
                                height: '80px',
                                marginRight: 2
                            }}
                        />
                        <Box component="div">
                            <Typography component="h4" variant="h4">{data.post.author.name}</Typography>
                            <Typography component="p" variant="p">{data.post.author.field}</Typography>
                        </Box>
                    </Box>
                    <Stars postStars={data.post.stars} size={30}/> 
                </Grid>
                <Grid item xs={12}>
                    <div 
                        dangerouslySetInnerHTML={{__html: sanitizeHtml(data.post.content.html)}}
                        style={{
                            fontFamily: 'Merriweather, serif',
                            lineHeight: '1.75rem',
                            fontSize: '1.25rem',
                            
                        }}
                    ></div>
                </Grid>
            </Grid>
        </Container>
        </>
            
        )
    }
}

export default BlogPage;