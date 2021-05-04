import { Theme } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

const style = (theme: Theme): any => ({
  paper: theme.mixins.gutters({
    marginTop: theme.spacing(12),
    paddingTop: 16,
    paddingBottom: 16,
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xl')]: { width: '100%' },
    backgroundColor: fade(theme.palette.common.white, 0.5),
  }),
  logo: {
    marginTop: theme.spacing(12),
    zIndex: -1,
    height: '0px',
    position: 'relative',
    display: 'flex',
    '& svg': {
      fill: fade(theme.palette.secondary.main, 0.05),
    },
  },
  avatar: {
    margin: theme.spacing(2, 1, 1),
    backgroundColor: theme.palette.secondary.main,
    boxShadow: theme.shadows[1],
  },
  field: { width: '100%', marginTop: theme.spacing(3) },
  button: { margin: theme.spacing(3, 0, 2) },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
});

export default style;
