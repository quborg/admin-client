import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import {
  Backdrop,
  Button,
  CircularProgress,
  FormControl,
  TextField,
  withStyles,
} from '@material-ui/core';
import KEYS from 'src/defs/keys';
import { Mutation } from 'src/graphql';
import { reactiveAlert } from 'src/helpers';
import { PATHS } from 'src/router';

import style from '../../style';

const SignUp: React.FC<TYPES.ClassesProps> = (props) => {
  const { classes } = props;
  const [inputs, setInputs] = useState<TYPES.SignUpInputs>({});
  const [errors, setErrors] = useState<TYPES.SignUpInputs>({});
  const [isLogged, setIsLogged] = useState(false);

  const [signUp, { loading, error }] = useMutation(Mutation.USER.SIGN_UP);

  useEffect(() => {
    if (error?.message) reactiveAlert(error.message, KEYS.error);
  }, [error]);

  const handleSignUp = (): void => {
    const { name, username, email, password } = inputs;
    if (!name) setErrors({ name: 'Empty "name" field' });
    if (!username) setErrors({ username: 'Empty "username" field' });
    if (!email) setErrors({ email: 'Empty "email" field' });
    if (!password) setErrors({ password: 'Empty "password" field' });
    if (name && username && email && password) {
      signUp({ variables: { inputs } })
        .then(({ data }) => {
          if (data?.token) {
            reactiveAlert('Successful Sign up!', KEYS.success);
            setIsLogged(true);
            localStorage.setItem('user', JSON.stringify(data));
          }
        })
        .catch((err) => {
          reactiveAlert(err.message, KEYS.error);
        });
    }
  };

  return isLogged ? (
    <Redirect to={PATHS.DASHBOARD} />
  ) : (
    <>
      <FormControl className={classes.field} fullWidth required>
        <TextField
          autoComplete="name"
          autoFocus
          error={!!errors.name}
          helperText={!!errors.name && 'must not be empty <'}
          label="Name *"
          onChange={(e) => {
            setInputs({ name: e.target.value });
            setErrors({});
          }}
          value={inputs.name}
          variant="outlined"
        />
      </FormControl>
      <FormControl className={classes.field} fullWidth required>
        <TextField
          autoComplete="username"
          error={!!errors.username}
          helperText={!!errors.username && 'must not be empty <'}
          label="Username *"
          onChange={(e) => {
            setInputs({ username: e.target.value });
            setErrors({});
          }}
          value={inputs.username}
          variant="outlined"
        />
      </FormControl>
      <FormControl className={classes.field} fullWidth required>
        <TextField
          autoComplete="email"
          error={!!errors.email}
          helperText={!!errors.email && 'must not be empty <'}
          label="Email Address *"
          onChange={(e) => {
            setInputs({ email: e.target.value });
            setErrors({});
          }}
          value={inputs.email}
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
            setInputs({ email: e.target.value });
            setErrors({});
          }}
          type="password"
          value={inputs.password}
          variant="outlined"
        />
      </FormControl>
      <Button
        className={classes.button}
        color="primary"
        disabled={loading || !!Object.keys(inputs).filter((key) => !inputs[key]).length}
        fullWidth
        onClick={handleSignUp}
        variant="contained">
        Sign up
      </Button>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default withStyles(style)(SignUp);
