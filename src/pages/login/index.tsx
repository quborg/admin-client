import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { useLazyQuery } from '@apollo/client';
import {
  Avatar,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  FormControl,
  Paper,
  TextField,
  withStyles,
} from '@material-ui/core';
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons';
import CONST from 'src/defs/const';
import { Queries } from 'src/graphql';
import { PATHS } from 'src/router';
import { Alert, SVG } from 'src/theme/components';

import Copyright from './Copyright';
import style from './style';

const Login: React.FC<TYPES.ClassesProps> = (props) => {
  const { classes } = props;
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  const [login, { data, loading, error: errors }] = useLazyQuery(Queries.LOGIN);

  useEffect(() => {
    if (errors?.message) setError(errors.message);
  }, [error, errors, setError]);

  useEffect(() => {
    if (data?.login?.token) {
      setIsLogged(true);
      localStorage.setItem('token', data.login.token);
      localStorage.setItem('user', JSON.stringify(CONST.App.USER));
    }
  }, [data, isLogged, setIsLogged]);

  if (isLogged) return <Redirect to={PATHS.DASHBOARD} />;

  const handleLogin = (): void => {
    if (email && password) {
      login({ variables: { args: { email, password } } });
    }
    if (!email) setEmailError(true);
    if (!password) setPasswordError(true);
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box alignItems="center" display="flex" flexDirection="column">
          <Box className={classes.logo}>
            <SVG.ILogo />
          </Box>
          <Paper className={classes.paper}>
            <Avatar alt="login icon" className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <FormControl className={classes.field} fullWidth required>
              <TextField
                autoComplete="email"
                autoFocus
                error={Boolean(error) || emailError}
                helperText={!error && emailError && 'should not be empty <'}
                label="Email Address *"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(false);
                }}
                value={email}
                variant="outlined"
              />
            </FormControl>
            <FormControl className={classes.field} fullWidth required>
              <TextField
                autoComplete="current-password"
                error={Boolean(error) || passwordError}
                helperText={!error && passwordError && 'should not be empty <'}
                label="Password *"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError(false);
                }}
                type="password"
                value={password}
                variant="outlined"
              />
            </FormControl>
            <Button
              className={classes.button}
              color="primary"
              fullWidth
              onClick={() => handleLogin()}
              variant="contained">
              Sign in
            </Button>
            <Backdrop className={classes.backdrop} open={loading}>
              <CircularProgress color="inherit" />
            </Backdrop>
          </Paper>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Box>
      </Container>
      <Alert
        message={error}
        onClose={() => {
          setError('');
        }}
        open={!!error}
        severity="error"
      />
    </>
  );
};

export default withStyles(style)(Login);
