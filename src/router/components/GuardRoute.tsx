import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import * as PATHS from '../config/paths';

const GuardRoute: React.FC<TYPES.RouteConfigProps> = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={() => (localStorage.getItem('token') ? children : <Redirect to={PATHS.LOGIN} />)}
  />
);

export default GuardRoute;
