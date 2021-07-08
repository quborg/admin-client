declare namespace TYPES {
  type SignUpInputs = { name?: string; username?: string; email?: string; password?: string };

  type ResetInputs = { email?: string; phone?: string };

  type SignInArgs = { email?: string; password?: string };

  type SignErrors<T> = { flag?: boolean } & { [P in keyof T]: T[P] };

  type FormTypes = {
    up: boolean;
    reset: boolean;
  };
  type FormTypesSetStates = {
    setUp: React.Dispatch;
    setReset: React.Dispatch;
  };

  type FormsProps = FormTypes;

  type SignTitleProps = ClassesProps & Theme & FormTypes;

  type SignFooterProps = ClassesProps & Theme & FormTypes & FormTypesSetStates;

  type FormInputs = SignUpInputs | ResetInputs | SignInArgs;

  type FormControlInputs = ClassesProps & { inputs: FormInputs };
}
