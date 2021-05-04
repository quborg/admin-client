import { createMuiTheme } from '@material-ui/core';

const defaultSpacing = createMuiTheme().spacing;

const overrides = {
  MUIDataTable: {
    paper: {
      maxHeight: `calc(100vh - ${defaultSpacing(12 + 8)}px)`,
      display: 'flex',
      flexDirection: 'column',
    },
  },
  MUIDataTableToolbar: {
    actions: {
      display: 'flex',
      flexDirection: 'row-reverse',
    },
  },
};

export default overrides;
