import { Transition } from 'src/theme/components';

import Reset from './Reset';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Forms: React.FC<TYPES.FormsProps> = ({ reset, up }) => (
  <>
    <Transition in={!reset && !up}>
      <SignIn />
    </Transition>
    <Transition in={!reset && up}>
      <SignUp />
    </Transition>
    <Transition in={reset}>
      <Reset />
    </Transition>
  </>
);

export default Forms;
