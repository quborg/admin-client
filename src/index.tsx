import ReactDOM from 'react-dom';

import { ApolloProvider } from '@apollo/client';
import apolloClient from 'src/apollo';
// import App from 'src/app';
import RouterProvider from 'src/router';
import ThemeProvider from 'src/theme';

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <ThemeProvider>
      <RouterProvider>
        {/* <App /> */}
        <></>
      </RouterProvider>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
