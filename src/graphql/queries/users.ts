import { gql } from '@apollo/client';

const USERS = gql`
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

export default USERS;
