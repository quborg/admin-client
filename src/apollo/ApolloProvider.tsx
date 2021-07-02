import { useContext } from 'react';

import { ApolloProvider as ApolloClientProvider } from '@apollo/client';

import apolloClient from './ApolloClient';
import { ErrorContext, ErrorProvider } from './links/error/contextProvider';

const ApolloProvider: React.FC = ({ children }) => {
  const handleUpdateErrors = useContext(ErrorContext);

  return (
    <ErrorProvider>
      <ApolloClientProvider client={apolloClient(handleUpdateErrors)}>
        {children}
      </ApolloClientProvider>
    </ErrorProvider>
  );
};

export default ApolloProvider;
