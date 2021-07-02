import React, { useState } from 'react';

import { ReactiveVars } from 'src/apollo';
import { CONST, KEYS } from 'src/defs';
import { reactiveAlert } from 'src/helpers';

export const ErrorContext = React.createContext<TYPES.handleUpdateErrors>((e) => {});

export const ErrorProvider: React.FC = ({ children }) => {
  const [errors, setErrors] = useState<TYPES.ErrorsContext>(CONST.Apollo.ERRORS_INIT);

  const handleUpdateErrors: TYPES.handleUpdateErrors = (errorsString) => {
    const errorsContext = (JSON.parse(errorsString) as TYPES.ErrorsContext).filter(
      (error) => Object.keys(error).length
    );
    setErrors(errorsContext);
  };

  return (
    <ErrorContext.Provider value={handleUpdateErrors}>
      {errors.map(({ title, errors }) => {
        if (title) reactiveAlert(title, KEYS.error);
        if (errors) ReactiveVars.inputsErrors(errors);
      })}
      {children}
    </ErrorContext.Provider>
  );
};
