/* eslint-disable no-console */
import { onError } from '@apollo/client/link/error';

import consoleLogGroupError from './consoleLogGroupError';

const isUnauthenticated = ({ message, extensions }): boolean =>
  (extensions && extensions.code === 'UNAUTHENTICATED') ||
  message.includes('TokenExpiredError');

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    consoleLogGroupError.header();
    graphQLErrors.forEach((error) => {
      if (isUnauthenticated(error)) {
        localStorage.setItem('token', '');
      }
      consoleLogGroupError.body(error);
    });
    consoleLogGroupError.footer();
  }
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export default errorLink;
