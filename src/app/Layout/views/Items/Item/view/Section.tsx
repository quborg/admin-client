import { useEffect, useState } from 'react';

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
import KEYS from 'src/defs/keys';
import { Image } from 'src/theme/components';

import DeleteButton from '../components/DeleteButton';
import EditSaveButton from '../components/EditSaveButton';
import style from './style';

const Section: React.FC<TYPES.ItemViewProps> = ({ classes, data: Data }) => {
  const [data, setData] = useState(Data);
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    setData(Data);
  }, [Data, setData]);

  return (
    <Box pt={6} px={4}>
      <Box>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography component="h2" variant="h4">
              Section
              <Typography color="textSecondary" component="span" variant="button">
                {' '}
                ID: {data?._id}
              </Typography>
            </Typography>
            <Typography component="span" variant="caption">
              <Box color="text.secondary" component="span">
                Total questions:
                <Typography className={classes.total} component="span" variant="caption">
                  {data?.totalQuestions}
                </Typography>
                {', Last Question posted '}
                <Box color="text.primary" component="span">
                  {moment(data?.lastQuestionAt).fromNow()}
                </Box>
              </Box>
            </Typography>
          </Box>
          <Box className={classes.tools}>
            {/* <EditSaveButton {...{ data, editable, setEditable }} itemName={KEYS.section} />
            <DeleteButton _id={data?.isActive ? '' : data?._id} itemName={KEYS.section} /> */}
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
        <FormControl className={classes.form} fullWidth required>
          <TextField
            disabled={!editable}
            InputLabelProps={{ shrink: Boolean(data?.name) }}
            label="Name"
            onChange={(e) => setData({ ...data, name: e.target.value })}
            value={data?.name || ''}
            variant="outlined"
          />
          <Image
            aspectRatio={3 / 2}
            editable={editable}
            height="200px"
            label="Image Preview"
            onChange={(e) => setData({ ...data, urlToImage: e.target.value })}
            src={data?.urlToImage || ''}
            width="200px"
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
                checked={Boolean(data?.isActive)}
                color="primary"
                disabled={!editable}
                onChange={(e) => setData({ ...data, isActive: e.target.checked })}
              />
            }
            label="Active"
          />
        </FormControl>
      </Box>
    </Box>
  );
};

Section.defaultProps = {
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

export default withStyles(style)(Section);
