/* eslint-disable no-console */
import { onError } from '@apollo/client/link/error';

import consoleError from './consoleError';

const isUnauthenticated = ({ message, extensions }): boolean =>
  (extensions && extensions.code === 'UNAUTHENTICATED') ||
  message.includes('TokenExpiredError');

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    consoleError.header();
    graphQLErrors.forEach((error) => {
      if (isUnauthenticated(error)) {
        localStorage.setItem('token', '');
      }
      consoleError.body(error);
    });
    consoleError.footer();
  }
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export default errorLink;
