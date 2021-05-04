import { FieldPolicy, InMemoryCache } from '@apollo/client';
import { ReactiveVars } from 'src/apollo';
import KEYS from 'src/defs/keys';

const cachePolicies: FieldPolicy = {
  keyArgs: false,
  merge: (existing = [], incoming = [], args) => {
    console.log('merge policy', existing, incoming, args);
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
          read() {
            return ReactiveVars.alert();
          },
        },
        action: {
          read() {
            return ReactiveVars.action();
          },
        },
        nameCases: {
          read() {
            return ReactiveVars.nameCases();
          },
        },
      },
    },
  },
});

export default localCache;
