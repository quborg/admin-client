declare namespace TYPES {
  import { RouteComponentProps } from 'react-router-dom';

  import { ApolloError, ObservableQueryFields } from '@apollo/client';
  import {
    ButtonProps as MuiButtonProps,
    SnackbarProps,
    SvgIconTypeMap,
    Theme,
  } from '@material-ui/core';
  import { OverridableComponent } from '@material-ui/core/OverridableComponent';
  import { AlertProps as MuiAlertProps } from '@material-ui/lab';
  import { MUIDataTableOptions, MUIDataTableProps } from 'mui-datatables';
  import KEYS from 'src/defs/keys';

  type OneOfItem = KEYS.question | KEYS.section | KEYS.category | KEYS.user;
  type OneOfItems = KEYS.questions | KEYS.sections | KEYS.categories | KEYS.users;

  interface ClassesProps {
    classes: any;
  }

  interface IsProp extends ClassesProps {
    is: boolean;
  }

  interface OpenStateProps {
    open: boolean;
    setOpen?: React.Dispatch;
  }

  interface EditableStateProps {
    editable: boolean;
    setEditable: (flag: boolean) => void;
  }

  interface ApolloResultFlagsProps {
    loading: boolean;
    error?: ApolloError;
  }

  interface TRefetch {
    refetch: ObservableQueryFields.refetch;
  }

  interface TFetchMore {
    fetchMore: ObservableQueryFields.fetchMore;
  }

  type DataItemsProps = {
    data: SCHEMA.Question[] & SCHEMA.Section[] & SCHEMA.Category[] & SCHEMA.User[];
  };

  type DataItemProps = {
    data: SCHEMA.Question & SCHEMA.Section & SCHEMA.Category & SCHEMA.User;
  };

  type ElementEventTarget = EventTarget & HTMLElement;

  interface ToggleDrawerProps {
    toggleDrawer: () => void;
  }
}
