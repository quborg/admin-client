import { useEffect } from 'react';

import { useQuery } from '@apollo/client';
import CONST from 'src/defs/const';
import KEYS from 'src/defs/keys';
import { Queries, State } from 'src/graphql';
import { ROUTES, RoutesBuilder } from 'src/router';
import { Alert } from 'src/theme/components';

import View from './view';

const Render: React.FC<TYPES.ItemsRenderProps> = ({ nameCases }) => {
  const { data: actionData } = useQuery(State.ACTION);
  const { loading, error, data = { [nameCases.getItems]: [] }, fetchMore, refetch } = useQuery(
    Queries[nameCases.ITEMS],
    {
      variables: { args: { start: 0, limit: CONST.Gql.LIMIT } },
      notifyOnNetworkStatusChange: true,
    }
  );

  useEffect(() => {
    if ([KEYS.delete, KEYS.update].includes(actionData.action.type)) {
      refetch();
    }
  }, [actionData, refetch]);

  return (
    <>
      <View
        data={data[nameCases.getItems]}
        error={error}
        fetchMore={fetchMore}
        loading={loading}
        nameCases={nameCases}
        refetch={refetch}
      />
      <Alert error={error} loading={loading} />
      {nameCases.item ? <RoutesBuilder routes={ROUTES.ItemRoutes[nameCases.item]} /> : <></>}
    </>
  );
};

export default Render;
