import { BrowserRouter } from 'react-router-dom';

import { ROUTES, RoutesBuilder } from 'src/router';

const RouterProvider: React.FC = ({ children }) => (
  <BrowserRouter>
    <RoutesBuilder routes={ROUTES.parentRoutes}>{children}</RoutesBuilder>
  </BrowserRouter>
);

export default RouterProvider;
