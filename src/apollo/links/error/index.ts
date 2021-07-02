/* eslint-disable no-console */
import { ApolloLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import consoleError from './consoleLog';

const isUnauthenticated = ({ message, extensions }): boolean =>
  (extensions && extensions.code === 'UNAUTHENTICATED') ||
  message.includes('TokenExpiredError');

const errorLink = (handleUpdateErrors): ApolloLink =>
  onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      consoleError.header();
      const gqlErrors = graphQLErrors.map((error) => {
        if (isUnauthenticated(error)) {
          localStorage.setItem('token', '');
        }
        consoleError.body(error);
        return {
          title: error.message,
          errors: error.extensions?.errors,
        };
      });
      consoleError.footer();
      handleUpdateErrors(JSON.stringify(gqlErrors));
    }
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

export default errorLink;
