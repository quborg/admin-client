declare namespace TYPES {
  import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

  type handleUpdateErrors = (errorsString: string) => void;

  interface IErrorsContext {
    title?: string;
    errors?: Maybe<{
      [k: string]: string;
    }>;
  }

  type ErrorsContext = IErrorsContext[];

  type apolloClient = (cb: handleUpdateErrors) => ApolloClient<NormalizedCacheObject>;
}
