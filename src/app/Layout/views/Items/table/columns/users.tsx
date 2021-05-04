import moment from 'moment';
import { CONST } from 'src/defs';
import { Image } from 'src/theme/components';

import { IsActive, IsAdmin, IsPublic, IsVerified } from './components';

const correctImageSrc = (path: string | undefined): string =>
  !path || path === 'media/avatar/default.png' ? '/avatar/default.png' : path;

const columns = (classes): any => [
  {
    name: '_id',
    label: 'ID',
    options: {
      display: 'excluded',
      filter: false,
      searchable: false,
    },
  },
  {
    name: 'profile.avatar.path',
    label: 'Avatar',
    options: {
      filter: false,
      sort: true,
      customBodyRender: (path) => (
        <Image src={[CONST.Apollo.SITE_DOMAIN, correctImageSrc(path)].join('')} />
      ),
    },
  },
  {
    name: 'name',
    label: 'Name',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'username',
    label: 'User Name',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'email',
    label: 'Email',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'isPublic',
    label: 'Visibility',
    options: {
      filter: true,
      filterType: 'checkbox',
      sort: true,
      customBodyRender: (is) => <IsPublic is={is} />,
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
    name: 'isAdmin',
    label: 'Admin',
    options: {
      filterType: 'checkbox',
      customBodyRender: (is) => <IsAdmin is={is} />,
    },
  },
  {
    name: 'isVerified',
    label: 'Verified',
    options: {
      filterType: 'checkbox',
      customBodyRender: (is) => <IsVerified is={is} />,
    },
  },
];

export default columns;
