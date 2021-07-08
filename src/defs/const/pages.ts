export const SIGN_UP_INIT: TYPES.SignUpInputs = {
  name: '',
  username: '',
  email: '',
  password: '',
};

export const INPUT_TYPES = {
  name: () => 'text',
  username: () => 'text',
  email: () => 'email',
  password: (b: boolean) => (b ? 'text' : 'password'),
};

export default {};
