import { Theme } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

const style = (theme: Theme): any => ({
  drawer: {
    width: theme.spacing(30),
    flexShrink: 0,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    border: 'none',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    '& .MuiDrawer-paper': {
      width: theme.spacing(30),
      backgroundColor: fade(theme.palette.common.dark, 0.05),
    },
    '& > .MuiBackdrop-invisible': {
      display: 'none',
    },
  },
  header: {
    backgroundColor: theme.palette.common.dark,
    color: theme.palette.primary.contrastText,
    '& h3': {
      color: theme.palette.primary.contrastText,
    },
  },
  listItemText: {
    margin: theme.spacing(1),
    textTransform: 'capitalize',
  },
  navLink: {
    textDecoration: 'none',
    color: theme.palette.common.dark,
    '&.active div.MuiListItem-button': {
      backgroundColor: fade(theme.palette.common.cyan, 0.1),
      borderRight: '1px solid',
    },
    '& > div.MuiListItem-button:hover': {
      backgroundColor: fade(theme.palette.common.dark, 0.2),
    },
    '& svg': {
      fill: theme.palette.common.dark,
      marginLeft: theme.spacing(1.5),
    },
  },
});

export default style;
