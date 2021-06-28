import { FC, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { LinearProgress, Snackbar, withStyles } from '@material-ui/core';
import { Alert as MuiAlert } from '@material-ui/lab';
import { ReactiveVars } from 'src/apollo';
import KEYS from 'src/defs/keys';
import { State } from 'src/graphql';
import { PATHS } from 'src/router';

import style from './style';

const Alert: FC<TYPES.AlertProps> = ({
  autoHideDuration,
  open: isOpen,
  message: aMessage,
  error,
  severity: aSeverity,
  variant,
  elevation,
  loading,
  classes,
}) => {
  const { data } = useQuery(State.ALERT);
  const [open, setOpen] = useState(isOpen);
  const [message, setMessage] = useState(aMessage);
  const [severity, setSeverity] = useState(aSeverity);
  const [expired, setExpired] = useState(false);
  const onClose = (): void => {
    ReactiveVars.alert({});
    setOpen(false);
  };

  useEffect(() => {
    if (error?.message) {
      if (!localStorage.getItem(KEYS.token)) setExpired(true);
      setOpen(true);
      setMessage(error.message);
      setSeverity('error');
    }
  }, [error, isOpen, setOpen, setSeverity, setExpired]);

  useEffect(() => {
    const { alert } = data;
    setOpen(alert.open);
    setMessage(alert.message);
    setSeverity(alert.severity);
  }, [data, setOpen, setMessage, setSeverity]);

  if (expired) return <Redirect to={PATHS.SIGN} />;

  if (loading) return <LinearProgress className={classes.progress} color="secondary" />;

  return (
    <Snackbar {...{ autoHideDuration, onClose, open, message }}>
      <MuiAlert {...{ elevation, onClose, severity, variant }}>{message}</MuiAlert>
    </Snackbar>
  );
};

Alert.defaultProps = {
  autoHideDuration: 5000,
  elevation: 6,
  variant: 'filled',
  severity: 'info',
};

export default withStyles(style)(Alert);
