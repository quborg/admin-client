import { Box, IconButton, Typography, withStyles } from '@material-ui/core';
import KEYS from 'src/defs/keys';
import { ROUTES } from 'src/router';

import descriptions from './descriptions';
import style from './style';

const Dashboard: React.FC<TYPES.DashboardProps> = ({ classes, history }) => (
  <Box
    alignItems="center"
    display="flex"
    justifyContent="space-around"
    minHeight="inherit"
    p={6}>
    {ROUTES.layoutViews
      .filter(({ menu, key }) => menu && key !== KEYS.dashboard)
      .map(({ Icon, key, path }) => (
        <Box bgcolor={descriptions[key].color} boxShadow={3} className={classes.box} key={key}>
          <IconButton onClick={() => history.push(path)}>
            <Box>
              <Icon />
            </Box>
            <Typography className={classes.description} component="p" variant="body1">
              {descriptions[key].text}
            </Typography>
          </IconButton>
        </Box>
      ))}
  </Box>
);

export default withStyles(style)(Dashboard);
