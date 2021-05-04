import { useState } from 'react';

import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  ListItemText,
  Menu,
  MenuItem,
  withStyles,
} from '@material-ui/core';
import {
  Info as InfoIcon,
  Notifications as NotificationsIcon,
  Warning as WarningIcon,
} from '@material-ui/icons';
import CONST from 'src/defs/const';

import style from './style';

const NotificationsMenu: React.FC<TYPES.ClassesProps> = ({ classes }) => {
  const [anchorEl, setAnchorEl] = useState<null | TYPES.ElementEventTarget>(null);

  const openMenu = ({ currentTarget }): void => setAnchorEl(currentTarget);
  const closeMenu = (): void => setAnchorEl(null);

  return (
    <Box className={classes.container}>
      <IconButton aria-controls="menuNotifications" color="inherit" onClick={openMenu}>
        <Badge badgeContent={3} className={classes.badge} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={CONST.App.popOriginPosition('bottom', 'right')}
        className={classes.menu}
        getContentAnchorEl={null}
        id="menuNotifications"
        onClose={closeMenu}
        open={Boolean(anchorEl)}
        PaperProps={{
          style: {
            width: 350,
          },
        }}
        transformOrigin={CONST.App.popOriginPosition('top', 'right')}>
        <MenuItem onClick={closeMenu}>
          <Box className={classes.menuItem}>
            <Avatar
              alt="Vastgoed Beleggers"
              src="https://avatars.githubusercontent.com/u/77993975"
            />
            <ListItemText
              primary="Confirm your email at VastgoedBeleggers"
              secondary="Feb 9, 2021"
            />
          </Box>
        </MenuItem>
        <Divider variant="inset" />
        <MenuItem onClick={closeMenu}>
          <Box className={classes.menuItem}>
            <Avatar className={classes.icon}>
              <InfoIcon />
            </Avatar>
            <ListItemText
              className={classes.listItemText}
              primary="Your exclusive invitation event schedule 9:00 am - 10:00 pm"
              secondary="Feb 21, 2021"
            />
          </Box>
        </MenuItem>
        <Divider variant="inset" />
        <MenuItem onClick={closeMenu}>
          <Box className={classes.messageWarning}>
            <Avatar className={classes.icon}>
              <WarningIcon />
            </Avatar>
            <ListItemText
              className={classes.listItemText}
              primary="Update your profile, your picture is not yet set."
              secondary="Feb 01, 2021"
            />
          </Box>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default withStyles(style)(NotificationsMenu);
