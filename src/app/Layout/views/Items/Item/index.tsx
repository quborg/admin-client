import { withRouter } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { State } from 'src/graphql';
import { Alert } from 'src/theme/components';

import Render from './render';

const Item: React.FC<TYPES.ItemIndexProps> = ({ location: { pathname } }) => {
  const id = pathname.split('/').pop() || '-';
  const {
    error,
    loading,
    data: { nameCases },
  } = useQuery(State.NAME_CASES);

  if (loading) return <Alert loading />;
  if (error) return <Alert error={error} />;

  return <Render _id={id} nameCases={nameCases} />;
};

export default withRouter(Item);
