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
import { State } from 'src/graphql';
import { capitalize, reactiveAlert, validateEmptyForm } from 'src/helpers';
import { PATHS } from 'src/router';

import style from '../../style';

const Inputs: React.FC<TYPES.FormControlInputs> = ({ classes, inputs }) => {
  const [errors, setErrors] = useState<TYPES.SignErrors<TYPES.SignUpInputs>>({ flag: false });
  const [showPassword, setShowPassword] = useState(false);

  const { data } = useQuery(State.INPUTS_ERRORS);

  useEffect(() => {
    if (data?.inputsErrors?.flag) {
      setErrors(data.inputsErrors);
    }
  }, [data, setErrors]);

  const getErrorListClass = (inputName): string =>
    `${errors[inputName]?.split('!').length - 1}-list`;

  return (
    <>
      {Object.keys(inputs).map((inputName) => (
        <FormControl
          className={`${classes.field}${errors[inputName] ? ' Mui-error' : ''}`}
          fullWidth
          key={`${inputName}-sign-up-input-form-control`}
          required>
          <TextField
            autoComplete={inputName}
            error={!!errors[inputName]}
            fullWidth
            InputProps={
              inputName === KEYS.password
                ? {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          onMouseDown={(e) => e.preventDefault()}>
                          {showPassword ? <Icons.Visibility /> : <Icons.VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }
                : undefined
            }
            label={capitalize(inputName === 'name' ? 'full name' : inputName)}
            onChange={(e) => {
              setInputs({ ...inputs, [inputName]: e.target.value });
              setErrors({ ...errors, [inputName]: '' });
            }}
            required
            type={CONST.Pages.INPUT_TYPES[inputName](showPassword)}
            value={(inputs[inputName] && inputs[inputName]) || ''}
            variant="outlined"
          />
          <FormHelperText
            className={`${classes.helperText} list-errors ${
              classes[getErrorListClass(inputName)]
            }`}
            component="ul"
            error={!!errors[inputName]}
            variant="outlined">
            {errors[inputName] &&
              errors[inputName]
                .split('!')
                .filter((x) => x.trim())
                .map((text) => <li key={text}>{text}</li>)}
          </FormHelperText>
        </FormControl>
      ))}
    </>
  );
};

export default withStyles(style)(Inputs);
