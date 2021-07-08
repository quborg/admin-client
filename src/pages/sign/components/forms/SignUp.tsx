import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { useMutation, useQuery } from '@apollo/client';
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  TextField,
  withStyles,
} from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import { CONST, KEYS } from 'src/defs';
import { Mutation, State } from 'src/graphql';
import { capitalize, reactiveAlert, validateEmptyForm } from 'src/helpers';
import { PATHS } from 'src/router';

import Inputs from './Inputs';
import style from '../../style';

const SignUp: React.FC<TYPES.ClassesProps> = ({ classes }) => {
  const [inputs, setInputs] = useState<TYPES.SignUpInputs>(CONST.Pages.SIGN_UP_INIT);
  const [errors, setErrors] = useState<TYPES.SignErrors<TYPES.SignUpInputs>>({ flag: false });
  const [isLogged, setIsLogged] = useState(false);

  const [signUp, { loading }] = useMutation(Mutation.USER.SIGN_UP);
  const { data } = useQuery(State.INPUTS_ERRORS);

  if (loading) reactiveAlert(true);

  useEffect(() => {
    if (data?.inputsErrors?.flag) {
      setErrors(data.inputsErrors);
    }
  }, [data, setErrors]);

  const handleSignUp = (): void => {
    setErrors({ flag: false });
    const errorsState = validateEmptyForm(inputs);
    if (errorsState.flag) {
      setErrors(errorsState);
      reactiveAlert('Please correct the errors !', KEYS.error);
    } else
      signUp({ variables: { inputs } })
        .then(({ data: { signUp: user = {} } }) => {
          if (user?.token) {
            reactiveAlert('Successful Sign up !', KEYS.success);
            setIsLogged(true);
            localStorage.setItem('user', JSON.stringify(user));
          } else reactiveAlert('Server failed !', KEYS.error);
        })
        .catch((err) => {
          reactiveAlert(err.message, KEYS.error);
        });
  };

  return isLogged ? (
    <Redirect to={PATHS.DASHBOARD} />
  ) : (
    <>
      <Inputs />
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

export default withStyles(style)(SignUp);
