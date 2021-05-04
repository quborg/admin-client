import { Theme } from '@material-ui/core';

const style = (theme: Theme): any => ({
  box: {
    height: theme.spacing(15),
    padding: theme.spacing(1),
    '& h3': {
      lineHeight: 0.7,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: '1rem',
      letterSpacing: '0.02rem',
    },
    '& span': {
      textTransform: 'capitalize',
      fontSize: '0.74rem',
      letterSpacing: '0.035rem',
    },
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: theme.spacing(1),
  },
});

export default style;
