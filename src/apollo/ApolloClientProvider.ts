import { ApolloClient, from } from '@apollo/client';
import { auth, cache, error, http } from 'src/apollo/links';

const ApolloClientProvider: TYPES.ApolloClientProviderType = new ApolloClient({
  link: from([auth, error, http]),
  cache,
  connectToDevTools: process.env.NODE_ENV !== 'production',
  assumeImmutableResults: true,
});

export default ApolloClientProvider;
