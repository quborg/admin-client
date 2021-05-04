import { gql } from '@apollo/client';

export const DELETE = gql`
  mutation DeleteSection($_id: ID!) {
    deleteSection(_id: $_id)
  }
`;

export const UPDATE = gql`
  mutation EditSection($inputs: SectionInputs) {
    editSection(inputs: $inputs) {
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

export default {};
