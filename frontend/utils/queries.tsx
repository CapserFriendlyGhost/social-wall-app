import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query Query {
    posts {
      author {
        name
      }
      content
      id
    }
  }
`;

export const CREATE_POST = gql`
  mutation Mutation($data: PostCreateInput!) {
    createPost(data: $data) {
      content
      id
    }
  }
`;
