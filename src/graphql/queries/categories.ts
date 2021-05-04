import { gql } from '@apollo/client';

export const GET_CATEGORIES_QUERY = gql`
  query GetCategories($args: ArrayFiltersArgs) {
    getCategories(args: $args) {
      _id
      _englishName
      _dutchName
    }
  }
`;

export default GET_CATEGORIES_QUERY;
