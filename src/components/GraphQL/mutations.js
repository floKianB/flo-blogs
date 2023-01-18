import { gql } from "@apollo/client";

export const COMMENT_ON_POST = gql`
mutation createComment($name: String!, $email: String!, $text: String!, $slug: String!) {
    createComment(
        data: {name: $name, email: $email, content: $text, post: {connect: {postSlug: $slug}}}
    ) {
        id
    }
}
`

