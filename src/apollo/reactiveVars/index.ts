import { makeVar, ReactiveVar } from '@apollo/client';

const action: ReactiveVar<SCHEMA.ReactiveAction | any> = makeVar<SCHEMA.ReactiveAction>(
  <SCHEMA.ReactiveAction>{}
);

const alert: ReactiveVar<TYPES.AlertProps | any> = makeVar<TYPES.AlertProps>(
  <TYPES.AlertProps>{}
);

const nameCases: ReactiveVar<TYPES.NameCases | any> = makeVar<TYPES.NameCases>(
  <TYPES.NameCases>{}
);

const inputsErrors: ReactiveVar<TYPES.IErrorsContext['errors'] | any> = makeVar<
  TYPES.IErrorsContext['errors']
>(<TYPES.IErrorsContext['errors']>{});

export default {
  action,
  alert,
  nameCases,
  inputsErrors,
};
