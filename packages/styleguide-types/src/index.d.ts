declare module 'vtex.styleguide' {
  export const Progress: typeof import('@vtex/styleguide/lib/Progress');
  /**
   * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Forms/AutocompleteInput)
   */
  export const AutocompleteInput: import("./AutocompleteInput").AutocompleteInput;
  export type AutocompleteInputProps = import("./AutocompleteInput").AutocompleteInputProps;

  /**
   * @see [oficial documentation](https://styleguide.vtex.com/#/Components/%F0%9F%91%BB%20Experimental/Charts?id=barchart)
   * @experimental
   */
  export const BarChart: typeof import('@vtex/styleguide/lib/BarChart');

  /**
   * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Containers/Box)
   */
  export const Box: typeof import('@vtex/styleguide/lib/Box');

  /**
   * @see [oficial documentation](https://styleguide.vtex.com/#/Components/%F0%9F%91%BB%20Experimental/Charts?id=bubblechart)
   * @experimental
   */
  export const BubbleChart: typeof import('@vtex/styleguide/lib/BubbleChart');

  /**
   * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Forms/ButtonPlain)
   */
  export const ButtonPlain: typeof import('@vtex/styleguide/lib/ButtonPlain');

  /**
   * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Forms/Conditions)
   */
  export const Conditions: typeof import('@vtex/styleguide/lib/Conditions');

  /**
   * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Containers/Divider)
   */
  export const Divider: typeof import('@vtex/styleguide/lib/Divider');

  /**
   * @see [oficial documentation](https://styleguide.vtex.com/#/Components/%F0%9F%91%BB%20Experimental/Modal%20V2)
   */
  export const EXPERIMENTAL_Modal: typeof import('@vtex/styleguide/lib/EXPERIMENTAL_Modal');

  /**
   * @see [oficial documentation](https://styleguide.vtex.com/#/Components/%F0%9F%91%BB%20Experimental/Modal%20V2)
   */
  export const EXPERIMENTAL_Table: typeof import('@vtex/styleguide/lib/EXPERIMENTAL_Table');

  export const EXPERIMENTAL_useCheckboxTree: typeof import('@vtex/styleguide/lib/EXPERIMENTAL_useCheckboxTree');

  export const EXPERIMENTAL_useTableMeasures: typeof import('@vtex/styleguide/lib/EXPERIMENTAL_useTableMeasures');

  export const EXPERIMENTAL_useTableProportion: typeof import('@vtex/styleguide/lib/EXPERIMENTAL_useTableProportion');

  export const EXPERIMENTAL_useTableSort: typeof import('@vtex/styleguide/lib/EXPERIMENTAL_useTableSort');

  export const EXPERIMENTAL_useTableVisibility: typeof import('@vtex/styleguide/lib/EXPERIMENTAL_useTableVisibility');
  export const FloatingActionBar: typeof import('@vtex/styleguide/lib/FloatingActionBar');
  export const LineChart: typeof import('@vtex/styleguide/lib/LineChart');
  export const ScatterChart: typeof import('@vtex/styleguide/lib/ScatterChart');
  export const SelectableCard: typeof import('@vtex/styleguide/lib/SelectableCard');
  /**
   * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Admin%20structure/Layout)
   */
  export const Layout: import('./Layout').Layout;
  export type LayoutProps = import('./Layout').LayoutProps;

  /**
   * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Admin%20structure/PageHeader)
   */
  export const PageHeader: import('./PageHeader').PageHeader;
  export type PageHeaderProps = import('./PageHeader').PageHeaderProps;

  /**
   *  @see [oficial documentation](https://styleguide.vtex.com/#/Components/Admin%20structure/Layout)
   **/
  export const Input: import('./Input').Input;
  export type InputProps = import('./Input').InputProps;

  /**
   * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Admin%20structure/PageBlock)
   */
  export const PageBlock: import('./PageBlock').PageBlock;
  export type PageBlockProps = import('./PageBlock').PageBlockProps;

  /**
   * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Forms/Button)
   */
  export const Button: import('./Button').Button;
  export type ButtonProps = import('./Button').ButtonProps;

  /**
   * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Forms/ButtonWithIcon)
   */
  export const ButtonWithIcon: import('./ButtonWithIcon').ButtonWithIcon;
  export type ButtonWithIconProps = import('./ButtonWithIcon').ButtonWithIconProps;


  export const IconArrowBack: import('./Icons').IconArrowBack;
  export const IconArrowDown: import('./Icons').IconArrowDown;
  export const IconArrowUp: import('./Icons').IconArrowUp;
  export const IconBars: import('./Icons').IconBars;
  export const IconBold: import('./Icons').IconBold;
  export const IconCalendar: import('./Icons').IconCalendar;
  export const IconCaretDown: import('./Icons').IconCaretDown;
  export const IconCaretLeft: import('./Icons').IconCaretLeft;
  export const IconCaretRight: import('./Icons').IconCaretRight;
  export const IconCaretUp: import('./Icons').IconCaretUp;
  export const IconCheck: import('./Icons').IconCheck;
  export const IconCheckPartial: import('./Icons').IconCheckPartial;
  export const IconClear: import('./Icons').IconClear;
  export const IconClock: import('./Icons').IconClock;
  export const IconClose: import('./Icons').IconClose;
  export const IconCog: import('./Icons').IconCog;
  export const IconColumns: import('./Icons').IconColumns;
  export const IconCopy: import('./Icons').IconCopy;
  export const IconDelete: import('./Icons').IconDelete;
  export const IconDensity: import('./Icons').IconDensity;
  export const IconDeny: import('./Icons').IconDeny;
  export const IconDownload: import('./Icons').IconDownload;
  export const IconEdit: import('./Icons').IconEdit;
  export const IconExternalLink: import('./Icons').IconExternalLink;
  export const IconExternalLinkMini: import('./Icons').IconExternalLinkMini;
  export const IconFailure: import('./Icons').IconFailure;
  export const IconFilter: import('./Icons').IconFilter;
  export const IconGrid: import('./Icons').IconGrid;
  export const IconHelp: import('./Icons').IconHelp;
  export const IconImage: import('./Icons').IconImage;
  export const IconInfo: import('./Icons').IconInfo;
  export const IconInlineGrid: import('./Icons').IconInlineGrid;
  export const IconItalic: import('./Icons').IconItalic;
  export const IconLink: import('./Icons').IconLink;
  export const IconLocation: import('./Icons').IconLocation;
  export const IconMinus: import('./Icons').IconMinus;
  export const IconOptionsDots: import('./Icons').IconOptionsDots;
  export const IconOrderedList: import('./Icons').IconOrderedList;
  export const IconPlus: import('./Icons').IconPlus;
  export const IconPlusLines: import('./Icons').IconPlusLines;
  export const IconPrinter: import('./Icons').IconPrinter;
  export const IconSave: import('./Icons').IconSave;
  export const IconSearch: import('./Icons').IconSearch;
  export const IconShoppingCart: import('./Icons').IconShoppingCart;
  export const IconSuccess: import('./Icons').IconSuccess;
  export const IconTableFilter: import('./Icons').IconTableFilter;
  export const IconText: import('./Icons').IconText;
  export const IconUnderline: import('./Icons').IconUnderline;
  export const IconUnorderedList: import('./Icons').IconUnorderedList;
  export const IconUpload: import('./Icons').IconUpload;
  export const IconUser: import('./Icons').IconUser;
  export const IconVisibilityOff: import('./Icons').IconVisibilityOff;
  export const IconVisibilityOn: import('./Icons').IconVisibilityOn;
  export const IconWarning: import('./Icons').IconWarning;
  export type IconProps = import('./Icons').IconProps;

  /**
   * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Forms/InputCurrency)
   */
  export const InputCurrency: import('./InputCurrency').InputCurrency;
  export type InputCurrencyProps = import('./InputCurrency').InputCurrency;

  /**
   * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Forms/DatePicker)
   */
  export const DatePicker: import('./DatePicker').DatePicker;
  export type DatePickerProps = import('./DatePicker').DataPickerProps;

  /**
   * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Display/Alert)
   */
  export const Alert: import('./Alert').Alert;
  export type AlertProps = import('./Alert').AlertProps;

  export const ToastContext: import('./ToastContext').ToastContext;
  export type ToastContextState = import('./ToastContext').ToastContextState;

  /**
   * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Notification/ToastProvider)
   */
  export const ToastProvider: import('./ToastProvider').ToastProvider;

  /**
   * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Display/Table)
   */
  export const Table: import('./Table').Table;
  export type TableProps = import('./Table').TableProps;

  /**
   * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Notification/Spinner)
   */
  export const Spinner: import('./Spinner').Spinner;
  export type SpinnerProps = import('./Spinner').SpinnerProps;

  /**
   * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Forms/InputSearch)
   */
  export const InputSearch: import('./InputSearch').InputSearch;
  export type InputSearchProps = import('./InputSearch').InputSearchProps;

  /**
   * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Display/Tooltip)
   */
  export const Tooltip: import('./Tooltip').Tooltip;
  export type TooltipProps = import('./Tooltip').TooltipProps;

  /**
   * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Display/Tag)
   */
  export const Tag: import('./Tag').Tag;
  export type TagProps = import('./Tag').TagProps;

  /**
   * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Overlays/ModalDialog)
   */
  export const ModalDialog: import('./ModalDialog').ModalDialog;
  export type ModalDialogProps = import('./ModalDialog').ModalDialogProps;

  /**
   * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Forms/Dropdown)
  */
 export const Dropdown: import('./Dropdown').Dropdown;
 export type DropdownProps = import('./Dropdown').DropdownProps;
}
