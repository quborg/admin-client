import { Chip } from '@material-ui/core';
import moment from 'moment';
import { Image } from 'src/theme/components';

import IsActive from './components/IsActive';

const columns = (classes): any => [
  {
    name: '_id',
    options: {
      display: 'excluded',
    },
  },
  {
    name: 'urlToImage',
    label: 'Image',
    options: {
      sort: false,
      filter: false,
      customBodyRender: (url) => <Image src={url} />,
    },
  },
  {
    name: 'name',
    label: 'Name',
    options: {
      filterType: 'textField',
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
    name: 'isActive',
    label: 'Active',
    options: {
      filterType: 'checkbox',
      customBodyRender: (is) => <IsActive is={is} />,
    },
  },
  {
    name: 'totalQuestions',
    label: 'Questions',
    options: {
      filter: false,
      customBodyRender: (total) => <Chip label={total} />,
    },
  },
  {
    name: 'lastQuestionAt',
    label: 'Last Question',
    options: {
      filter: false,
      customBodyRender: (at) => moment(at).fromNow(),
    },
  },
];

export default columns;
