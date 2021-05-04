import { Fade, IconButton, Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import * as Icons from '@material-ui/icons';
import { ReactiveVars } from 'src/apollo';
import KEYS from 'src/defs/keys';

const style = {
  icons: {},
};

const Toolbar: React.FC<TYPES.ToolbarProps> = ({ classes, refetch }) => (
  <Tooltip
    interactive
    leaveDelay={250}
    title="Reset Table"
    TransitionComponent={Fade}
    TransitionProps={{ timeout: 250 }}>
    <IconButton
      onClick={() => {
        ReactiveVars.action({ type: KEYS.refetch });
        refetch();
      }}>
      <Icons.RotateLeftRounded />
    </IconButton>
  </Tooltip>
);

export default withStyles(style)(Toolbar);
