import React from 'react';
import { NavLink } from 'react-router-dom';

import { Box, Drawer, List, ListItem, ListItemText, withStyles } from '@material-ui/core';
import { ROUTES } from 'src/router';

import { Brand, UserBadge } from './components';
import style from './style';

const SideBar: React.FC<TYPES.SideBarProps> = ({ classes, open }) => (
  <Drawer
    BackdropProps={{ invisible: true }}
    className={classes.drawer}
    elevation={0}
    open
    variant="temporary">
    <Box className={classes.header}>
      <Brand />
      <UserBadge />
    </Box>
    <List>
      {ROUTES.layoutViews
        .filter(({ menu }) => menu)
        .map(({ key, path: to, Icon }) => (
          <NavLink className={classes.navLink} key={key} to={to}>
            <ListItem button>
              <Icon />
              <ListItemText className={classes.listItemText} primary={key} />
            </ListItem>
          </NavLink>
        ))}
    </List>
  </Drawer>
);

export default withStyles(style)(SideBar);
