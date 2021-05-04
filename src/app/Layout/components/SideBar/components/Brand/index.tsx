import React from 'react';

import { Box, Typography, withStyles } from '@material-ui/core';
import { Logo } from 'src/theme/components/svg';

import style from './style';

const LOGO_TEXT = 'Admin Panel';

const Brand: React.FC<TYPES.ClassesProps> = ({ classes }) => (
  <Box className={classes.brand}>
    <Logo height="35" width="35" />
    <Typography component="h3">{LOGO_TEXT}</Typography>
  </Box>
);

export default withStyles(style)(Brand);
