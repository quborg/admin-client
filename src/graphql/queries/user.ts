import { gql } from '@apollo/client';

export const SIGN_IN = gql`
  query Login($args: LoginArgs) {
    login(args: $args) {
      _id
      name
      username
      email
      token
      avatar {
        path
      }
      role
      public
      active
      verified
    }
  }
`;

export const USER = gql`
  query GetUser($_id: ID!) {
    getUser(_id: $_id) {
      _id
      name
      username
      email
      isPublic
      isAdmin
      isActive
      isVerified
      profile {
        avatar {
          path
        }
      }
    }
  }
`;

export const USERS = gql`
  query GetUsers($args: ArrayFiltersArgs) {
    getUsers(args: $args) {
      _id
      name
      username
      email
      isPublic
      isAdmin
      isActive
      isVerified
      profile {
        avatar {
          path
        }
      }
    }
  }
`;
