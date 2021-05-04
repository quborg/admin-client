import React from 'react';

import { Link, Typography, withStyles } from '@material-ui/core';
import { Copyright as CopyrightIcon } from '@material-ui/icons';

const style = (theme): any => ({
  icon: {
    fontSize: '0.91rem',
    position: 'relative',
    top: '3px',
    margin: theme.spacing(0, 0.5),
  },
});

const SITE_NAME = 'Vastgoed Beleggers';
const SITE_URL = 'https://www.vastgoedbeleggers.nl/';

const Copyright: React.FC<TYPES.ClassesProps> = ({ classes }) => (
  <Typography align="center" color="textSecondary" variant="body2">
    Copyright
    <CopyrightIcon className={classes.icon} fontSize="small" />
    <Link href={SITE_URL}>{SITE_NAME}</Link> {new Date().getFullYear()}.
  </Typography>
);

export default withStyles(style)(Copyright);
