import { CssBaseline } from '@material-ui/core';
import { ROUTES, RoutesBuilder } from 'src/router';
import { CssGlobal } from 'src/theme/styles';

import Layout from './Layout';

const App: React.FC = () => (
  <>
    <CssBaseline />
    <CssGlobal />
    <Layout>
      <RoutesBuilder routes={ROUTES.layoutViews} />
    </Layout>
  </>
);

export default App;
