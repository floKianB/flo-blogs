import { gql } from '@apollo/client';

// What will be called when we want to mount the home page [all post information - the whole text && authors name and id and like]
const GET_BLOGS_INFO = gql`
    query {
        posts {
            id
            postSlug
            title
            description
            stars
            coverPhoto {
                url
            }
            author {
                name
                profilePhoto {
                    url
                }
                authorSlug
                field
            }
        }
        authors {
            name
            authorSlug
        }
    }
`;

// Use when we wanna mount the specified authors page description
const GET_AUTHORS_INFO = gql`
    query getAuthor($slug: String!) {
        author(where: {authorSlug: $slug}) {
            authorSlug
            name
            profilePhoto {
                url
            }
            field
            description {
                html
            }
            posts {
                id
                postSlug
                stars
                title
                coverPhoto {
                    url
                }
                description
            }
        }
    }
`

const GET_POST_BY_SLUG = gql`
    query getPost($postSlug: String!){
        post(where: {postSlug: $postSlug}) {
            coverPhoto {
                url
            }
            title
            datePublished
            stars
            author {
                field
                name
                profilePhoto {
                    url
                }
            }
            content {
                html
            }
        }
    }
`;


export { GET_BLOGS_INFO, GET_AUTHORS_INFO, GET_POST_BY_SLUG }