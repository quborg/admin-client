import { Theme } from '@material-ui/core';

const measure: number = 230 / 8;

const style = (theme: Theme): any => ({
  box: {
    ', & > button': {
      width: theme.spacing(measure),
      height: theme.spacing(measure),
      borderRadius: '5%',
      '& span': {
        flexDirection: 'column',
      },
    },
    '& svg': {
      width: theme.spacing(measure / 7),
      height: theme.spacing(measure / 7),
      marginBottom: theme.spacing(2),
      fill: theme.palette.common.dark,
    },
  },
  description: {
    padding: theme.spacing(0, 3),
    color: theme.palette.primary.contrastText,
  },
});

export default style;
