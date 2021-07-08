import { useState } from 'react';

import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  IconButton,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import moment from 'moment';
import Select from 'src/app/Layout/select';
import KEYS from 'src/defs/keys';

import DeleteButton from '../components/DeleteButton';
import EditSaveButton from '../components/EditSaveButton';
import style from './style';

const Question: React.FC<TYPES.ItemViewProps> = ({ classes, data: Data }) => {
  const [data, setData] = useState<SCHEMA.User>(Data);
  const [editable, setEditable] = useState(false);

  return (
    <Box pt={6} px={4}>
      <Box>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography component="h2" variant="h4">
              Question
              <Typography color="textSecondary" component="span" variant="button">
                {' '}
                ID: {data?._id}
              </Typography>
            </Typography>
            <Typography component="span" variant="caption">
              <Box color="text.secondary" component="span">
                {'By: '}
                <Box color="text.primary" component="span">
                  {`${data?.username}, `}
                </Box>
                {/* {moment(data?.publishedAt).fromNow()} */}
              </Box>
            </Typography>
          </Box>
          <Box className={classes.tools}>
            {/* <EditSaveButton {...{ data, editable, setEditable }} itemName={KEYS.question} />
            <DeleteButton _id={data?._id} itemName={KEYS.question} /> */}
          </Box>
        </Box>
        <Divider />
      </Box>
      <Box position="relative" pt={6}>
        <IconButton
          className={classes.cancelSave}
          color="secondary"
          hidden={!editable}
          onClick={() => {
            setEditable(false);
            setData(Data);
          }}>
          <Icons.CloseRounded color="error" />
        </IconButton>
        {/* <FormControl className={classes.form} fullWidth required>
          <TextField
            disabled={!editable}
            InputLabelProps={{ shrink: Boolean(data?.title) }}
            label="Title"
            multiline
            onChange={(e) => setData({ ...data, title: e.target.value })}
            rowsMax={6}
            value={data?.title || ''}
            variant="outlined"
          />
          <TextField
            disabled={!editable}
            InputLabelProps={{ shrink: Boolean(data?.description) }}
            label="Description"
            multiline
            onChange={(e) => setData({ ...data, description: e.target.value })}
            rowsMax={2}
            value={data?.description || ''}
            variant="outlined"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={Boolean(data?.isPublic)}
                color="primary"
                disabled={!editable}
                onChange={(e) => setData({ ...data, isPublic: e.target.checked })}
              />
            }
            label="Public"
          />
          <Select.Sections
            defaultName={data?.section}
            disabled={!editable}
            onChange={(section) => setData({ ...data, section })}
          />
          <Select.Categories
            defaultName={data?.subcats?._englishName}
            disabled={!editable}
            onChange={(subcats) => setData({ ...data, subcats })}
          />
        </FormControl> */}
      </Box>
    </Box>
  );
};

Question.defaultProps = {
  data: {
    _id: '',
    title: '',
    description: '',
    isPublic: false,
    section: '',
    category: {
      _englishName: '',
    },
  },
};

export default withStyles(style)(Question);
