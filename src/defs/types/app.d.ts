declare namespace TYPES {
  type LayoutProps = ClassesProps;
  type DashboardProps = ClassesProps & RouteComponentProps;
  type SideBarProps = ClassesProps & OpenStateProps;
  type TopBarProps = ClassesProps & ToggleDrawerProps;

  type ItemsIndexProps = RouteComponentProps;
  type ItemsRenderProps = { nameCases: ItemsKeys };
  type ItemsViewProps = ClassesProps &
    DataEntitiesProps &
    RouteComponentProps &
    TFetchMore &
    TRefetch &
    ApolloResultFlagsProps;
  type ItemIndexProps = RouteComponentProps;
  type ItemRenderProps = { _id: string; nameCases: ItemsKeys };
  type ItemViewProps = ClassesProps & DataEntityProps;
  type ItemViewGroupProps = DataEntityProps & { ItemName: string };
  type NameCases = {
    ITEMS: string;
    Items: string;
    getItems: string;
    item: string;
    ITEM: string;
    Item?: string;
    getItem?: string;
  };

  type ItemEditSaveButtonProps = DataItemProps &
    EditableStateProps &
    DataEditItemProps & {
      itemName?: OneOfItem;
    };
  type ItemDeleteButtonProps = RouteComponentProps & {
    _id?: string;
    itemName?: OneOfItem;
  };

  type UserProfileProps = {
    username: string;
    avatar: string;
    role: string;
  };

  type SelectSections = {
    disabled?: boolean;
    defaultName?: string;
    onChange: (section: string | undefined) => void;
  };

  type SelectCategories = {
    disabled?: boolean;
    defaultName?: string;
    onChange: (category: SCHEMA.CategoryInputs | undefined) => void;
  };

  type ToolbarProps = ClassesProps & TRefetch;
}
