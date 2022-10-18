import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_AUTHORS_INFO } from './GraphQL/queries';



const AuthorPage = () => {
    console.log('ok')
    const { slug } = useParams();
    console.log(slug)
    const { loading, data, errors } = useQuery(GET_AUTHORS_INFO, {variables: { slug }});
    if(loading) { return <h1>Loading...</h1> }
    if(errors) { return <h2>{errors}</h2> }
    else{
        return (
            <h1>{data.author.name}k</h1>
        )
    }

}

export default AuthorPage;