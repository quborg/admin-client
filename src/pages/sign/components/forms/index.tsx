import { Box } from '@material-ui/core';
import { Transition } from 'src/theme/components';

import Reset from './Reset';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Forms: React.FC<TYPES.FormsProps> = ({ reset, up }) => (
  <Box>
    <Transition in={!reset && !up}>
      <SignIn />
    </Transition>
    <Transition in={!reset && up}>
      <SignUp />
    </Transition>
    <Transition in={reset}>
      <Reset />
    </Transition>
  </Box>
);

export default Forms;
