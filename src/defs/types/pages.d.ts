declare namespace TYPES {
  type SignUpInputs = { name?: string; username?: string; email?: string; password?: string };

  type ResetInputs = { email?: string; phone?: string };

  type SignInArgs = { email?: string; password?: string };

  type SignErrors<T> = { flag?: boolean } & { [P in keyof T]: T[P] };

  type SignVariants = {
    up: boolean;
    reset: boolean;
  };
  type SignSetStates = {
    setUp: React.Dispatch;
    setReset: React.Dispatch;
  };

  type FormsProps = SignVariants;

  type SignTitleProps = ClassesProps & Theme & SignVariants;

  type SignFooterProps = ClassesProps & Theme & SignVariants & SignSetStates;
}
