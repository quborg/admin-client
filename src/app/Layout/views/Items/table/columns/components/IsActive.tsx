import { Chip, Theme, withStyles } from '@material-ui/core';
import { Clear, Done } from '@material-ui/icons';

const style = (theme: Theme): any => ({
  active: {
    backgroundColor: theme.palette.common.green,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  inactive: {
    backgroundColor: theme.palette.common.gray,
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

const IsActive: React.FC<TYPES.IsProp> = ({ is, classes }) => (
  <Chip
    className={classes[is ? 'active' : 'inactive']}
    color={is ? 'primary' : 'secondary'}
    icon={is ? <Done /> : <Clear />}
    label={is ? 'Active' : 'Inactive'}
  />
);

export default withStyles(style)(IsActive);
