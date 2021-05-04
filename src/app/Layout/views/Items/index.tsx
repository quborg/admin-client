import { withRouter } from 'react-router-dom';

import { ReactiveVars } from 'src/apollo';
import { CONST } from 'src/defs';
import { Alert } from 'src/theme/components';

import Render from './render';

const Items: React.FC<TYPES.ItemsIndexProps> = ({ location: { pathname } }) => {
  const nameCases: TYPES.NameCases = CONST.Router.buildNameCases(pathname);
  ReactiveVars.nameCases(nameCases);

  if (!nameCases?.ITEMS) return <Alert message={`Can't find Collection ${pathname}`} />;

  return <Render nameCases={nameCases} />;
};

export default withRouter(Items);
