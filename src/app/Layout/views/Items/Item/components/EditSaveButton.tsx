import { useEffect, useState } from 'react';

import { ApolloError, useMutation } from '@apollo/client';
import * as Icons from '@material-ui/icons';
import { ReactiveVars } from 'src/apollo';
import KEYS from 'src/defs/keys';
import { Mutations } from 'src/graphql';
import { Alert, Button, Dialog } from 'src/theme/components';

const EditSaveButton: React.FC<TYPES.ItemEditSaveButtonProps> = ({
  data = { _id: '' },
  editable,
  itemName,
  setEditable,
}) => {
  const [ITEM] = useState(itemName.toUpperCase());
  const [error, setError] = useState<ApolloError>();
  const [editItem, { loading, error: Error }] = useMutation(Mutations[ITEM].UPDATE);
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    setError(Error);
  }, [Error, setError]);

  const onConfirm = (flag: boolean): void => {
    if (flag) {
      let cleanInputs = data;
      if (itemName === KEYS.section) {
        const { totalQuestions, lastQuestionAt, ...rest } = data;
        cleanInputs = rest;
      }
      editItem({
        variables: { inputs: cleanInputs },
      })
        .then((response) => {
          if (response?.data) {
            ReactiveVars.action({ type: KEYS.update });
            ReactiveVars.alert({
              message: 'Saved successfully !',
              open: true,
              severity: 'success',
            });
            setEditable(false);
          }
        })
        .catch((err) => {
          setError(err.message);
        });
    }
    setConfirm(false);
  };

  return (
    <>
      {editable ? (
        <Button
          colour="info"
          disabled={loading || !data?._id}
          endIcon={<Icons.SaveOutlined />}
          onClick={() => setConfirm(true)}
          variant="contained">
          Save
        </Button>
      ) : (
        <Button
          colour="warning"
          disabled={loading || !data?._id}
          endIcon={<Icons.EditRounded />}
          onClick={() => setEditable(true)}
          variant="contained">
          Edit
        </Button>
      )}
      <Alert error={error} loading={loading} />
      <Dialog confirmation={onConfirm} context={KEYS.update} open={confirm} />
    </>
  );
};

export default EditSaveButton;
