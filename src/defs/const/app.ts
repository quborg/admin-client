import { PopoverOrigin } from '@material-ui/core';
import KEYS from 'src/defs/keys';

export const USER = {
  username: 'Geart Lassche',
  avatar:
    'https://www.dlf.pt/dfpng/middlepng/481-4818073_man-in-green-tie-icon-admin-login-icon.png',
  role: 'administrator',
};

export const popOriginPosition = (
  vertical: PopoverOrigin['vertical'],
  horizontal: PopoverOrigin['horizontal']
): PopoverOrigin => ({
  vertical,
  horizontal,
});

export const ArrayOfItemNames = [KEYS.question, KEYS.section, KEYS.category, KEYS.user];
export const ArrayOfItemsNames = [KEYS.questions, KEYS.sections, KEYS.categories, KEYS.users];
