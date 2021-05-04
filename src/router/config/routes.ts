import * as Icons from '@material-ui/icons';
import App from 'src/app';
import { Dashboard } from 'src/app/Layout/components';
import { Item, Items } from 'src/app/Layout/views';
import KEYS from 'src/defs/keys';
import { Login } from 'src/pages';
import { withDrawer } from 'src/theme';

import * as PATHS from './paths';

export const parentRoutes: TYPES.RouteConfigProps[] = [
  {
    key: KEYS.login,
    path: PATHS.LOGIN,
    component: Login,
  },
  {
    guard: true,
    key: KEYS.admin,
    path: PATHS.ADMIN,
    component: App,
  },
  {
    key: KEYS.redirect,
    to: PATHS.DASHBOARD,
  },
];

export const layoutViews: TYPES.RouteConfigProps[] = [
  {
    key: KEYS.dashboard,
    path: PATHS.DASHBOARD,
    menu: true,
    Icon: Icons.DashboardRounded,
    component: Dashboard,
  },
  {
    key: KEYS.questions,
    path: PATHS.QUESTIONS,
    menu: true,
    Icon: Icons.LibraryBooksRounded,
    component: Items,
  },
  {
    key: KEYS.sections,
    path: PATHS.SECTIONS,
    menu: true,
    Icon: Icons.LandscapeRounded,
    component: Items,
  },
  {
    key: KEYS.categories,
    path: PATHS.CATEGORIES,
    menu: true,
    Icon: Icons.CategoryRounded,
    component: Items,
  },
  {
    key: KEYS.users,
    path: PATHS.USERS,
    menu: true,
    Icon: Icons.GroupRounded,
    component: Items,
  },
  {
    key: KEYS.redirect,
    to: PATHS.DASHBOARD,
  },
];

export const ItemRoutes = {
  question: [
    {
      key: KEYS.question,
      path: PATHS.QUESTION,
      component: withDrawer(Item),
    },
  ],
  section: [
    {
      key: KEYS.section,
      path: PATHS.SECTION,
      component: withDrawer(Item),
    },
  ],
  category: [
    {
      key: KEYS.category,
      path: PATHS.CATEGORY,
      component: withDrawer(Item),
    },
  ],
  user: [
    {
      key: KEYS.user,
      path: PATHS.USER,
      component: withDrawer(Item),
    },
  ],
};
