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

export const REGISTER_USER = gql`
  mutation Mutation($data: UserCreateInput!) {
    createUser(data: $data) {
      name
      email
      password {
        isSet
      }
    }
  }
`;

export const AUTH_USER = gql`
  mutation Mutation($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          email
          id
          name
        }
        sessionToken
      }
      ... on UserAuthenticationWithPasswordFailure {
        message
      }
    }
  }
`;
