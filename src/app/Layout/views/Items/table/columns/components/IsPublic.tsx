import { Chip, Theme, withStyles } from '@material-ui/core';
import { VpnLock as PrivateIcon, Public as PublicIcon } from '@material-ui/icons';

const style = (theme: Theme): any => ({
  public: {
    backgroundColor: theme.palette.common.cyan,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  private: {
    backgroundColor: theme.palette.common.grayDark,
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

const IsPublic: React.FC<TYPES.IsProp> = ({ is, classes }) => (
  <Chip
    className={classes[is ? 'public' : 'private']}
    color={is ? 'primary' : 'secondary'}
    icon={is ? <PublicIcon /> : <PrivateIcon />}
    label={is ? 'Public' : 'Private'}
  />
);

export default withStyles(style)(IsPublic);
