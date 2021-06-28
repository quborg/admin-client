import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { useLazyQuery } from '@apollo/client';
import {
  Backdrop,
  Button,
  CircularProgress,
  FormControl,
  TextField,
  withStyles,
} from '@material-ui/core';
import KEYS from 'src/defs/keys';
import { Query } from 'src/graphql';
import { reactiveAlert } from 'src/helpers';
import { PATHS } from 'src/router';

import style from '../../style';

const SignIn: React.FC<TYPES.ClassesProps> = (props) => {
  const { classes } = props;
  const [args, setArgs] = useState<TYPES.SignInArgs>({});
  const [errors, setErrors] = useState<TYPES.SignInArgs>({});
  const [isLogged, setIsLogged] = useState(false);

  const [signIn, { data, loading, error }] = useLazyQuery(Query.USER.SIGN_IN);

  useEffect(() => {
    if (error?.message) reactiveAlert(error.message, KEYS.error);
    if (data?.signIn?.token) {
      setIsLogged(true);
      localStorage.setItem('user', JSON.stringify(data.signIn));
    }
  }, [error, data, setIsLogged]);

  const handleSignIn = (): void => {
    const { email, password } = args;
    if (!email) setErrors({ email: 'Empty email field' });
    if (!password) setErrors({ password: 'Empty password field' });
    if (email && password) {
      signIn({ variables: { args } });
    }
  };

  return isLogged ? (
    <Redirect to={PATHS.DASHBOARD} />
  ) : (
    <>
      <FormControl className={classes.field} fullWidth required>
        <TextField
          autoComplete="email"
          autoFocus
          error={!!errors.email}
          helperText={!!errors.email && 'must not be empty <'}
          label="Email Address *"
          onChange={(e) => {
            setArgs({ email: e.target.value });
            setErrors({});
          }}
          value={args.email}
          variant="outlined"
        />
      </FormControl>
      <FormControl className={classes.field} fullWidth required>
        <TextField
          autoComplete="current-password"
          error={!!errors.password}
          helperText={!!errors.password && 'must not be empty <'}
          label="Password *"
          onChange={(e) => {
            setArgs({ password: e.target.value });
            setErrors({});
          }}
          type="password"
          value={args.password}
          variant="outlined"
        />
      </FormControl>
      <Button
        className={classes.button}
        color="primary"
        // disabled={!args.email}
        fullWidth
        onClick={handleSignIn}
        variant="contained">
        Login
      </Button>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default withStyles(style)(SignIn);
