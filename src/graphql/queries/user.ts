import { gql } from '@apollo/client';

const USER = gql`
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

export default USER;
