import { gql } from '@apollo/client';

export const ALERT = gql`
  query Alert {
    alert @client
  }
`;

export const ACTION = gql`
  query Action {
    action @client
  }
`;

export const NAME_CASES = gql`
  query NameCases {
    nameCases @client
  }
`;

export default {
  ACTION,
  ALERT,
  NAME_CASES,
};
