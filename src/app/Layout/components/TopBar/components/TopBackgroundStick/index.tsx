import React from 'react';

import { Box, withStyles } from '@material-ui/core';

import style from './style';

const TopBackgroundStick: React.FC<TYPES.ClassesProps> = ({ classes }) => (
  <Box className={classes.stick} />
);

export default withStyles(style)(TopBackgroundStick);
