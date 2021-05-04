import { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import { ApolloError, useMutation } from '@apollo/client';
import * as Icons from '@material-ui/icons';
import { ReactiveVars } from 'src/apollo';
import KEYS from 'src/defs/keys';
import { Mutations } from 'src/graphql';
import { PATHS } from 'src/router';
import { Alert, Button, Dialog } from 'src/theme/components';

const DeleteButtonID: React.FC<TYPES.ItemDeleteButtonProps> = ({ _id, itemName, history }) => {
  const [ITEM] = useState(itemName.toUpperCase());
  const [error, setError] = useState<ApolloError>();
  const [removeIdem, { loading, error: Error }] = useMutation(Mutations[ITEM].DELETE);
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    setError(Error);
  }, [Error, setError]);

  const onConfirm = (flag): void => {
    if (flag)
      removeIdem({ variables: { _id } })
        .then((response) => {
          if (response?.data) {
            ReactiveVars.action({ type: KEYS.delete });
            ReactiveVars.alert({
              message: 'Deleted successfully !',
              open: true,
              severity: 'success',
            });
            history.push(PATHS.QUESTIONS);
          }
        })
        .catch((err) => {
          setError(err.message);
        });
    setConfirm(false);
  };

  return (
    <>
      <Button
        colour="danger"
        disabled={loading || !_id}
        endIcon={<Icons.DeleteForeverRounded />}
        onClick={() => setConfirm(true)}
        variant="contained">
        Delete
      </Button>
      <Alert error={error} loading={loading} />
      <Dialog confirmation={onConfirm} context={KEYS.delete} open={confirm} />
    </>
  );
};

const DeleteButton: React.FC<TYPES.ItemDeleteButtonProps> = ({ _id, itemName, history }) => {
  if (!_id)
    return (
      <Button
        colour="danger"
        disabled
        endIcon={<Icons.DeleteForeverRounded />}
        variant="contained">
        Delete
      </Button>
    );
  return <DeleteButtonID {...{ _id, itemName, history }} />;
};

export default withRouter(DeleteButton);
