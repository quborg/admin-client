import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core';
import { Table } from 'src/theme/components';

import style from './style';
import { columns, options } from './table';

const ItemsView: React.FC<TYPES.ItemsViewProps> = ({
  classes,
  data,
  fetchMore,
  history,
  loading,
  error,
  nameCases,
  refetch,
}) => (
  <Table
    columns={columns[nameCases.Items](classes)}
    data={data}
    error={error}
    fetchMore={fetchMore}
    loading={loading}
    options={options(nameCases.ITEM, history, refetch)}
    title={nameCases.Items}
  />
);

export default withStyles(style)(withRouter(ItemsView));
