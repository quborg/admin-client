import { fade, lighten, Theme } from '@material-ui/core';

const style = (theme: Theme): any => ({
  container: {
    backgroundColor: theme.palette.common.chocolate,
    boxShadow: theme.shadows[24],
    border: '1px solid',
    borderTop: 'none',
    borderBottom: 'none',
    borderColor: lighten(theme.palette.common.chocolate, 0.1),
  },
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xl')]: { width: '100%' },
    backgroundColor: fade(theme.palette.common.olive, 0.9),
    border: '1px solid',
    borderColor: lighten(theme.palette.common.olive, 0.2),
  }),
  field: { width: '100%', marginTop: theme.spacing(3) },
  button: { margin: theme.spacing(3, 0, 2) },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  footer: {},
});

export default style;
