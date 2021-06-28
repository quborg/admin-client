import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  withStyles,
} from '@material-ui/core';
import { ExitToApp as ExitToAppIcon } from '@material-ui/icons';
import CONST from 'src/defs/const';
import { PATHS } from 'src/router';

import style from './style';

const UserMenu: React.FC<TYPES.ClassesProps> = ({ classes }) => {
  const [avatar, setAvatar] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | TYPES.ElementEventTarget>(null);
  const history = useHistory();

  const openMenu = ({ currentTarget }): void => setAnchorEl(currentTarget);
  const closeMenu = (): void => setAnchorEl(null);

  useEffect(() => {
    const userStream = localStorage.getItem('user');
    if (userStream) {
      try {
        const user: TYPES.UserProfileProps = JSON.parse(userStream);
        setAvatar(user.avatar);
      } catch (error) {
        console.error(error);
      }
    }
  }, [avatar, setAvatar]);

  return (
    <Box>
      <Button aria-controls="menuUser" onClick={openMenu}>
        <Avatar alt="user avatar" src={avatar} />
      </Button>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={CONST.App.popOriginPosition('bottom', 'right')}
        getContentAnchorEl={null}
        id="menuUser"
        onClose={closeMenu}
        open={Boolean(anchorEl)}
        transformOrigin={CONST.App.popOriginPosition('top', 'right')}>
        <MenuItem onClick={closeMenu}>My Profile</MenuItem>
        <MenuItem onClick={closeMenu}>My Calendar</MenuItem>
        <MenuItem onClick={closeMenu}>
          My Inbox
          <ListItemIcon>
            <Badge badgeContent={2} color="secondary" />
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            localStorage.setItem('token', '');
            localStorage.setItem('user', '');
            history.push(PATHS.SIGN);
          }}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          Log Out
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default withStyles(style)(UserMenu);
