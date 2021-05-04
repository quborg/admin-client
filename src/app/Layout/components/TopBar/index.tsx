import React from 'react';

import { AppBar, Box, IconButton, Toolbar, withStyles } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import {
  Breadcrumbs,
  SearchInput,
  // ToggleTheme,
} from 'src/theme/components';

import { NotificationsMenu, TopBackgroundStick, UserMenu } from './components';
import style from './style';

const TopBar: React.FC<TYPES.TopBarProps> = ({ classes, toggleDrawer }) => (
  <AppBar className={classes.appBar}>
    <Toolbar disableGutters>
      <IconButton aria-label="Menu" color="inherit" onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
      <Box display="flex" flex="1" justifyContent="flex-end">
        <SearchInput />
      </Box>
      {/* <ToggleTheme /> */}
      <NotificationsMenu />
      <UserMenu />
    </Toolbar>
    <Breadcrumbs />
    <TopBackgroundStick />
  </AppBar>
);

export default withStyles(style, { withTheme: true })(TopBar);
