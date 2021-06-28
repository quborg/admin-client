import { Color } from '@material-ui/lab';
import jwt from 'jsonwebtoken';
import { ReactiveVars } from 'src/apollo';
import CONST from 'src/defs/const';

export const reactiveAlert = (message: string, severity: Color, open = true): void => {
  ReactiveVars.alert({ message, open, severity });
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
