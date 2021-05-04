import { Theme } from '@material-ui/core';

const style = (theme: Theme): any => ({
  brand: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2, 2, 1),
    height: theme.spacing(8),
    position: 'relative',
    '& > svg': {
      fill: theme.palette.primary.contrastText,
    },
    '& > h3': {
      paddingLeft: theme.spacing(1),
      letterSpacing: '0.05rem',
      fontSize: '0.8rem',
    },
  },
});

export default style;
