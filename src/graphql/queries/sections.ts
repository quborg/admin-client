import { gql } from '@apollo/client';

const SECTIONS = gql`
  query GetSections($args: ArrayFiltersArgs) {
    getSections(args: $args) {
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

export default SECTIONS;
