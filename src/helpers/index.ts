import { Color } from '@material-ui/lab';
import jwt from 'jsonwebtoken';
import { ReactiveVars } from 'src/apollo';
import CONST from 'src/defs/const';

export const reactiveAlert = (
  message: string | boolean,
  severity?: Color,
  open = true
): void => {
  if (typeof message === 'boolean') ReactiveVars.alert({ loading: true });
  else ReactiveVars.alert({ message, open, severity });
};

export const isTokenValid = (): boolean => {
  let valid = true;
  try {
    const { token } = JSON.parse(<string>localStorage.getItem('user'));
    const payload = jwt.verify(token, CONST.Apollo.SECRET_CODE);
    console.log('payload', payload);
  } catch (error) {
    valid = false;
    const message = error?.message || 'Token error';
    reactiveAlert(message, 'error');
  }
  return valid;
};

export const capitalize = (W: string): string => W.charAt(0).toUpperCase() + W.slice(1);

export const validateEmptyForm = (inputs: TYPES.FormInputs): TYPES.IErrorsContext['errors'] =>
  Object.keys(inputs).reduce(
    (e, k) => ({
      ...e,
      [k]: inputs[k] ? '' : `Empty ${capitalize(k)} field. Must not !`,
      flag: e.flag || !inputs[k],
    }),
    { flag: false }
  );
