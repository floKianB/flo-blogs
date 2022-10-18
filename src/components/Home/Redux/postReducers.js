const initialState = {
    posts: [],
    fillteredPosts: [],
    errors: "",
}
export const postReducer = (state=initialState, { type, payload }) => {
    switch(type){
        case 'POSTS_RECEIVE':
            return  {
                ...state,
                posts: payload.posts,
                authors: payload.authors,
            }
        case "POSTS_FROM_AUTHORS":
            const authorFilter = () => {
                if(payload !== "All Posts"){
                    return state.posts.filter(post => post.author.name === payload);
                }
                else {
                    return state.posts;
                }
            }
            return {
                ...state,
                fillteredPosts: authorFilter(),
            }
        
        default:
            return state;
    }
}

