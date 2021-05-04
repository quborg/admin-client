import React, { useEffect, useState } from 'react';

import { Avatar, Box, Typography, withStyles } from '@material-ui/core';

import style from './style';

const initialUser = {
  username: '',
  avatar: '',
  role: 'admin',
};

const UserBadge: React.FC<TYPES.ClassesProps> = ({ classes }) => {
  const [user, setUser] = useState(initialUser);

  useEffect(() => {
    const userStream = localStorage.getItem('user');
    const isStateChanged = userStream !== JSON.stringify(user);
    if (userStream && isStateChanged) {
      try {
        const userStreamParsed: TYPES.UserProfileProps = JSON.parse(userStream);
        if (
          user.username !== userStreamParsed.username ||
          user.avatar !== userStreamParsed.avatar ||
          user.role !== userStreamParsed.role
        )
          setUser(userStreamParsed);
      } catch (error) {
        console.error(error);
      }
    }
  }, [user, setUser]);

  return (
    <Box alignItems="center" className={classes.box} display="flex" justifyContent="center">
      <Avatar alt="user avatar" className={classes.avatar} src={user.avatar} />
      <Box>
        <Typography component="h3" variant="subtitle1">
          {user.username}
        </Typography>
        <Typography component="span" variant="subtitle2">
          {user.role}
        </Typography>
      </Box>
    </Box>
  );
};

export default withStyles(style)(UserBadge);
