import { gql } from '@apollo/client';

const LOGIN = gql`
  query Login($args: LoginArgs) {
    login(args: $args) {
      token
    }
  }
`;

export default LOGIN;
