import { gql } from '@apollo/client';

export const CATEGORY = gql`
  query GetCategory($_id: ID!) {
    getCategory(_id: $_id) {
      _englishName
      _dutchName
    }
  }
`;

export default CATEGORY;
