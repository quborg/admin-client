import ReactDOM from 'react-dom';

import ApolloClientProvider from 'src/apollo';
// import App from 'src/app';
import ReactRouterProvider from 'src/router';
import MuiThemeProvider from 'src/theme';

ReactDOM.render(
  <ApolloClientProvider>
    <MuiThemeProvider>
      <ReactRouterProvider>
        <></>
        {/* <App /> */}
      </ReactRouterProvider>
    </MuiThemeProvider>
  </ApolloClientProvider>,
  document.getElementById('root')
);
