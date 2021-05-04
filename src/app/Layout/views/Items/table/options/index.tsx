import KEYS from 'src/defs/keys';
import { PATHS } from 'src/router';

import Toolbar from './Toolbar';

const options = (ITEM, history, refetch): TYPES.TableOptions => ({
  onRowClick: (rowData) => {
    if (![KEYS.CATEGORY].includes(ITEM)) history.push(PATHS[ITEM].replace(':id', rowData[0]));
  },
  customToolbar: () => <Toolbar refetch={refetch} />,
});

export default options;
