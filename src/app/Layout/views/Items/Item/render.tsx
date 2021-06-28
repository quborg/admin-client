import { useQuery } from '@apollo/client';
import { Query } from 'src/graphql';
import { Alert } from 'src/theme/components';

import View from './view';

const Render: React.FC<TYPES.ItemRenderProps> = ({ _id, nameCases }) => {
  const {
    loading,
    error,
    data = { [nameCases.getItem]: [] },
  } = useQuery(Query[nameCases.ITEM], {
    variables: { _id },
    partialRefetch: true,
  });

  if (loading) return <Alert loading />;
  if (error) return <Alert error={error} />;

  return (
    <>
      <View data={data[nameCases.getItem]} ItemName={nameCases.Item} />
      <Alert error={error} loading={loading} />
    </>
  );
};

export default Render;
