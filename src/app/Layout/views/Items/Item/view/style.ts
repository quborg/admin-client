import { Theme } from '@material-ui/core';

const style = (theme: Theme): any => ({
  form: {
    '& > *': {
      marginBottom: theme.spacing(4),
    },
    padding: theme.spacing(0, 2),
  },
  tools: {
    '&> button:not(:first-child)': {
      marginLeft: theme.spacing(2),
    },
  },
  cancelSave: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  verifiedSvg: {
    position: 'relative',
    top: '3px',
  },
});

export default style;
