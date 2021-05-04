import { gql } from '@apollo/client';

const QUESTIONS = gql`
  query GetQuestions($args: QuestionsFiltersArgs) {
    getQuestions(args: $args) {
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

export default QUESTIONS;
