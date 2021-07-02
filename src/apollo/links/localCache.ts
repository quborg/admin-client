import { FieldPolicy, InMemoryCache } from '@apollo/client';
import { ReactiveVars } from 'src/apollo';

const cachePolicies: FieldPolicy = {
  keyArgs: false,
  merge: (existing = [], incoming = [], args) => {
    // console.log('merge policy', existing, incoming, args);
    // if ([KEYS.delete, KEYS.update, KEYS.refetch].includes(ReactiveVars.action()?.type)) {
    //   console.log('only incoming -', ReactiveVars.action()?.type, args);
    //   ReactiveVars.action({});
    //   return incoming;
    // }
    return [...existing, ...incoming];
  },
};

const localCache = new InMemoryCache({
  addTypename: false,
  typePolicies: {
    Query: {
      fields: {
        getQuestions: cachePolicies,
        getSections: cachePolicies,
        getCategories: cachePolicies,
        getUsers: cachePolicies,
        alert: {
          read: () => ReactiveVars.alert(),
        },
        action: {
          read: () => ReactiveVars.action(),
        },
        nameCases: {
          read: () => ReactiveVars.nameCases(),
        },
        inputsErrors: {
          read: () => ReactiveVars.inputsErrors(),
        },
      },
    },
  },
});

export default localCache;
