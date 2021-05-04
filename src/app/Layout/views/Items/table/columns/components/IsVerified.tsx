import { Chip, darken, fade, Theme, withStyles } from '@material-ui/core';
import { FiberManualRecordTwoTone, VerifiedUser } from '@material-ui/icons';

const style = (theme: Theme): any => ({
  verified: {
    backgroundColor: theme.palette.common.teal,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  unverified: {
    backgroundColor: darken(fade(theme.palette.common.teal, 0.4),0.5),
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

const IsVerified: React.FC<TYPES.IsProp> = ({ is, classes }) => (
  <Chip
    className={classes[is ? 'verified' : 'unverified']}
    color={is ? 'primary' : 'secondary'}
    icon={is ? <VerifiedUser /> : <FiberManualRecordTwoTone />}
    label={is ? 'Verified' : 'Unverified'}
  />
);

export default withStyles(style)(IsVerified);
