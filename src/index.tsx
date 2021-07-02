import ReactDOM from 'react-dom';

import ApolloProvider from 'src/apollo';
// import App from 'src/app';
import RouterProvider from 'src/router';
import ThemeProvider from 'src/theme';

ReactDOM.render(
  <ApolloProvider>
    <ThemeProvider>
      <RouterProvider>
        <></>
        {/* <App /> */}
      </RouterProvider>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
