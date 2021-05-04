import { Theme } from '@material-ui/core';

const style = (theme: Theme): any => ({
  stick: {
    position: 'absolute',
    height: theme.spacing(15),
    width: '100%',
    top: theme.spacing(8),
    right: '0',
    zIndex: -1,
    backgroundColor: theme.palette.common.dark,
  },
});

export default style;
