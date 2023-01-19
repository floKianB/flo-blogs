import { useQuery } from '@apollo/client';
import { GET_BLOGS_INFO } from '../../../GraphQL/queries';

const requestPosts = () => ({
    type: 'POSTS_REQUEST'
})
const receivePosts = (allData) => ({
    type: 'POSTS_RECEIVE',
    payload: allData,
})
const failurePosts = () => ({
    type: 'POSTS_FAILURE',
})


const FETCH_POSTS = () => {
    const { loading, data } = useQuery(GET_BLOGS_INFO)
    return (dispatch) => {
        if(loading){
            dispatch(requestPosts()); 
        } else if (data){
            const allData = {
                posts: data.posts,
                authors: data.authors,
            }
            dispatch(receivePosts(allData));
            
        } else {
            dispatch(failurePosts());
        }
    }
}

const POSTS_FROM_AUTHORS = (filteredPosts) => ({
    type: 'POSTS_FROM_AUTHORS',
    payload: filteredPosts,
})


export { FETCH_POSTS, POSTS_FROM_AUTHORS }