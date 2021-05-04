import { gql } from '@apollo/client';

export const DELETE = gql`
  mutation DeleteQuestion($_id: ID!) {
    deleteQuestion(_id: $_id)
  }
`;

export const UPDATE = gql`
  mutation EditQuestion($inputs: QuestionInputs) {
    editQuestion(inputs: $inputs) {
      _id
      title
      description
      section
      isPublic
      subcats {
        _englishName
        _dutchName
      }
    }
  }
`;
