import { gql } from '@apollo/client';

const SECTION = gql`
  query GetSection($_id: ID!) {
    getSection(_id: $_id) {
      _id
      name
      urlToImage
      description
      isActive
      totalQuestions
      lastQuestionAt
    }
  }
`;

export default SECTION;
