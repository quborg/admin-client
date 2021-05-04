import { Typography } from '@material-ui/core';
import moment from 'moment';

import IsPublic from './components/IsPublic';

const columns = (classes): any => [
  {
    name: '_id',
    options: {
      display: 'excluded',
    },
  },
  {
    name: 'title',
    label: 'Question',
    options: {
      filter: true,
      sort: true,
      customBodyRender: (title) => (
        <Typography className={classes.mainColumn} noWrap variant="body2">
          {title}
        </Typography>
      ),
    },
  },
  {
    name: 'description',
    label: 'Description',
    options: {
      display: false,
    },
  },
  {
    name: 'section',
    label: 'Municipality',
    options: {
      filterType: 'multiselect',
    },
  },
  {
    name: 'isPublic',
    label: 'Visibility',
    options: {
      filterType: 'checkbox',
      customBodyRender: (is) => <IsPublic is={is} />,
    },
  },
  {
    name: 'subcats._englishName',
    label: 'Category',
    options: {
      filterType: 'multiselect',
    },
  },
  {
    name: 'createdBy.username',
    label: 'Created By',
    options: {
      filterType: 'dropdown',
    },
  },
  {
    name: 'publishedAt',
    label: 'Created At',
    options: {
      filter: false,
      customBodyRender: (at) => moment(at).fromNow(),
    },
  },
];

export default columns;
