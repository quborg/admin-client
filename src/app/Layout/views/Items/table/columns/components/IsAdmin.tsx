import { Chip, darken, fade, Theme, withStyles } from '@material-ui/core';
import { Person, SupervisorAccountTwoTone } from '@material-ui/icons';

const style = (theme: Theme): any => ({
  admin: {
    backgroundColor: theme.palette.common.blue,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  regular: {
    backgroundColor: darken(fade(theme.palette.common.yellow, 0.8), 0.3),
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

const IsAdmin: React.FC<TYPES.IsProp> = ({ is, classes }) => (
  <Chip
    className={classes[is ? 'admin' : 'regular']}
    color={is ? 'primary' : 'secondary'}
    icon={is ? <SupervisorAccountTwoTone /> : <Person />}
    label={is ? 'Admin' : 'Regular'}
  />
);

export default withStyles(style)(IsAdmin);
