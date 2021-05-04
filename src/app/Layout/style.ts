import { Theme } from '@material-ui/core';

const style = (theme: Theme): any => ({
  viewsWrapper: {
    margin: theme.spacing(12, 0, 0, 32),
    backgroundColor: theme.palette.background.default,
    zIndex: 1100,
    position: 'relative',
    overflow: 'hidden',
    minHeight: theme.spacing(50),
    maxHeight: `calc(100vh - ${theme.spacing(12 + 8)}px)`,
  },
});

export default style;
