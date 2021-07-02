import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { useMutation, useQuery } from '@apollo/client';
import { Button, FormControl, TextField, withStyles } from '@material-ui/core';
import { CONST, KEYS } from 'src/defs';
import { Mutation, State } from 'src/graphql';
import { capitalize, reactiveAlert } from 'src/helpers';
import { PATHS } from 'src/router';

import style from '../../style';

const SignUp: React.FC<TYPES.ClassesProps & TYPES.ThemeProps> = ({ classes, theme }) => {
  const [inputs, setInputs] = useState<TYPES.SignUpInputs>({ ...CONST.Pages.SIGN_UP_INIT });
  const [errors, setErrors] = useState<TYPES.SignErrors<TYPES.SignUpInputs>>({ flag: false });
  const [isLogged, setIsLogged] = useState(false);

  const [signUp, { loading, error }] = useMutation(Mutation.USER.SIGN_UP);
  const { data: inputsErrors } = useQuery(State.INPUTS_ERRORS);

  useEffect(() => {
    if (error?.message) reactiveAlert(error.message, KEYS.error);
  }, [error]);

  useEffect(() => {
    // TODO
  }, [inputsErrors]);

  if (loading) reactiveAlert(true);

  const handleSignUp = (): void => {
    let errorsState = { flag: false };
    errorsState = Object.keys(inputs).reduce(
      (e, k) => ({
        ...e,
        [k]: inputs[k] ? '' : `Empty ${k} field`,
        flag: e.flag || !inputs[k],
      }),
      errorsState
    );
    setErrors(errorsState);
    if (errorsState.flag) reactiveAlert('Please correct the errors!', KEYS.error);
    else
      signUp({ variables: { inputs } })
        .then(({ data: { signUp: user = {} } }) => {
          if (user?.token) {
            reactiveAlert('Successful Sign up!', KEYS.success);
            setIsLogged(true);
            localStorage.setItem('user', JSON.stringify(user));
          } else reactiveAlert('Failed to reach the server!', KEYS.error);
        })
        .catch((err) => {
          reactiveAlert(err.message, KEYS.error);
        });
  };

  return isLogged ? (
    <Redirect to={PATHS.DASHBOARD} />
  ) : (
    <>
      {Object.keys(inputs).map((inputName) => (
        <FormControl
          className={classes.field}
          fullWidth
          key={`${inputName}-sign-up-input`}
          required>
          <TextField
            autoComplete={inputName}
            autoFocus
            error={!!errors[inputName]}
            helperText={!!errors[inputName] && 'must not be empty'}
            label={`${capitalize(inputName)} *`}
            onChange={(e) => {
              setInputs({ ...inputs, [inputName]: e.target.value });
              setErrors({ ...errors, [inputName]: '' });
            }}
            type={['email', 'password'].includes(inputName) ? inputName : 'text'}
            value={(inputs[inputName] && inputs[inputName]) || ''}
            variant="outlined"
          />
        </FormControl>
      ))}
      <Button
        className={classes.button}
        color="primary"
        disabled={loading}
        fullWidth
        onClick={handleSignUp}
        variant="contained">
        Sign up
      </Button>
    </>
  );
};

export default withStyles(style, { withTheme: true })(SignUp);
