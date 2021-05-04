import { gql } from '@apollo/client';

const QUESTION = gql`
  query GetQuestion($_id: ID!) {
    getQuestion(_id: $_id) {
      _id
      title
      description
      isPublic
      section
      subcats {
        _englishName
        _dutchName
      }
      createdBy {
        _id
        username
      }
      publishedAt
    }
  }
`;

export default QUESTION;
