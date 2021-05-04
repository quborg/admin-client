import React, { useState } from 'react';

import { Box, Container, withStyles } from '@material-ui/core';

import { SideBar, TopBar } from './components';
import style from './style';

const Layout: React.FC<TYPES.LayoutProps> = ({ classes, children }) => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = (): void => {
    setOpen(!open);
  };

  return (
    <Container className="AppGutterLeftZero" maxWidth="xl">
      <TopBar toggleDrawer={toggleDrawer} />
      <SideBar open />
      <Box borderRadius="4px" boxShadow={8} className={classes.viewsWrapper}>
        {children}
      </Box>
    </Container>
  );
};

export default withStyles(style)(Layout);
