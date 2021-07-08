import { useEffect, useState } from 'react';

import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  IconButton,
  TextField,
  Tooltip,
  Typography,
  withStyles,
} from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import { CONST } from 'src/defs';
import KEYS from 'src/defs/keys';
import { Image } from 'src/theme/components';

import DeleteButton from '../components/DeleteButton';
import EditSaveButton from '../components/EditSaveButton';
import style from './style';

const correctImageSrc = (path: string | undefined): string => {
  const relativePath =
    path === 'media/avatar/default.png' || !path ? '/avatar/default.png' : path;
  const src = [CONST.Apollo.SITE_DOMAIN, relativePath].join('');
  return src;
};

const User: React.FC<TYPES.ItemViewProps> = ({ classes, data: Data }) => {
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
              User
              <Typography color="textSecondary" component="span" variant="button">
                {' '}
                ID: {data?._id}
              </Typography>
            </Typography>
            <Typography component="span" variant="caption">
              <Box color="text.secondary" component="span">
                <Tooltip title={data?.isVerified ? 'Verified' : 'Unverified'}>
                  {data?.isVerified ? (
                    <Icons.VerifiedUser
                      className={classes.verifiedSvg}
                      viewBox="-10 -15 40 40"
                    />
                  ) : (
                    <Icons.FiberManualRecordTwoTone viewBox="-10 -20 40 40" />
                  )}
                </Tooltip>
                username:
                <Box color="text.primary" component="span">
                  {data?.username}
                </Box>
                {', email '}
                <Box color="text.primary" component="span">
                  {data?.email}
                </Box>
              </Box>
            </Typography>
          </Box>
          <Box className={classes.tools}>
            {/* <EditSaveButton {...{ data, editable, setEditable }} itemName={KEYS.section} />
            <DeleteButton _id={data.isActive ? '' : data._id} itemName={KEYS.section} /> */}
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
            InputLabelProps={{ shrink: Boolean(data.name) }}
            label="Name"
            onChange={(e) => setData({ ...data, name: e.target.value })}
            value={data?.name || ''}
            variant="outlined"
          />
          <Image
            aspectRatio={1}
            editable={editable}
            height="150px"
            label="Profile Image"
            onChange={(e) =>
              setData({ ...data, profile: { avatar: { path: e.target.value } } })
            }
            src={correctImageSrc(data?.profile?.avatar?.path)}
            width="150px"
          />
          <TextField
            disabled={!editable}
            InputLabelProps={{ shrink: Boolean(data?.username) }}
            label="User Name"
            onChange={(e) => setData({ ...data, username: e.target.value })}
            value={data?.username || ''}
            variant="outlined"
          />
          <TextField
            disabled={!editable}
            InputLabelProps={{ shrink: Boolean(data?.email) }}
            label="Email"
            multiline
            onChange={(e) => setData({ ...data, email: e.target.value })}
            rowsMax={2}
            type="email"
            value={data?.email || ''}
            variant="outlined"
          />
          <TextField
            disabled
            InputLabelProps={{ shrink: Boolean(data?.password) }}
            label="Password"
            multiline
            onChange={(e) => setData({ ...data, password: e.target.value })}
            rowsMax={2}
            type="password"
            value={data?.password || ''}
            variant="outlined"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={Boolean(data.isPublic)}
                color="primary"
                disabled={!editable}
                onChange={(e) => setData({ ...data, isPublic: e.target.checked })}
              />
            }
            label="Public"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={Boolean(data.isActive)}
                color="primary"
                disabled={!editable}
                onChange={(e) => setData({ ...data, isActive: e.target.checked })}
              />
            }
            label="Active"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={Boolean(data.isAdmin)}
                color="primary"
                disabled={!editable}
                onChange={(e) => setData({ ...data, isAdmin: e.target.checked })}
              />
            }
            label="Admin"
          />
        </FormControl>
      </Box>
    </Box>
  );
};

User.defaultProps = {
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

export default withStyles(style)(User);
