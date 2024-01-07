import type { FC } from 'react';
import type { CustomOnSubmitEvent } from './common';

/**
 * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Display/Table)
 */
type Table = FC<TableProps>;

type TableProps = {
  /**
   * Array of objects with data
   *
   * @required
   */
  items: object[];

  /**
   * JSON defining the data model schema for the items
   *
   * @required
   * @see More info about it after the examples
   */
  schema: Schema;

  /**
   * Shape for bulk actions
   */
  bulkActions?: {
    texts: object;
    totalItems: number;
    onChange: () => void;
    selectedRows: object[];
    main: object;
    others: object[];
    fixed: boolean;
  };

  /**
   * In case you need precise control of table container height (number in pixels)
   */
  containerHeight?: number;

  /**
   * Row info visual density
   *
   * @default 'medium'
   * @enum {string} - One of: 'low', 'medium', 'high'
   */
  density?: 'low' | 'medium' | 'high';

  /**
   * Do not render the table header (only the rows)
   */
  disableHeader?: boolean;

  /**
   * Allows rows to show the full height of their content
   */
  dynamicRowHeight?: boolean;

  /**
   * Children for emptystate
   */
  emptyStateChildren?: React.ReactNode;

  /**
   * Label for emptystate
   *
   * @default 'Nothing to show.'
   */
  emptyStateLabel?: string;

  /**
   * Filters property
   */
  filters?: Filters;

  /**
   * Fix first column so only the following ones scroll horizontally
   *
   * @default false
   */
  fixFirstColumn?: boolean;

  /**
   * Full width property
   *
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Line actions column
   */
  lineActions?: {
    label: ((params: LineActionParams) => string) | (() => string)
    /**
     * if true, the text will be red
     * 
     * @default false
     */
    isDangerous?: boolean;
    onClick: ((params: LineActionParams) => void) | (() => void)
  }[];

  /**
   * Controls the table loading state
   *
   * @default false
   */
  loading?: boolean;

  /**
   * Callback invoked when a user clicks on a table row.
   */
  onRowClick?: (params: OnRowClickParams) => void;

  /**
   * Callback invoked when a user hovers a table row.
   */
  onRowHover?: (rowIndex: number) => void;

  /**
   * Callback to handle sort
   */
  onSort?: (sortOrder: string, sortedBy: string) => object;

  /**
   * Pagination properties
   */
  pagination?: {
    onNextClick?: () => void;
    onPrevClick?: () => void;
    currentItemFrom: number;
    currentItemTo: number;
    onRowsChange?: (e: React.ChangeEventHandler, value: string) => void;
    textOf: React.ReactNode;
    totalItems: number;
    textShowRows: React.ReactNode;
    rowsOptions?: number[];
    itemsLabel?: string;
    /**
     * Use this prop if you want to control the number of rows selected, instead of leaving it to the Pagination component.
     */
    selectedOption?: number;
    hasPageTopIndicator?: boolean;
    testIds?: {
      rowsOptions?: string;
      prevBtn?: string;
      nextBtn?: string;
      pageIndicator?: string;
    };
  };

  /**
   * Sort order and which property (key in schema) is table data sorted by.
   */
  sort?: {
    sortOrder: string;
    sortedBy: string;
  };

  /**
   * Toolbar (search and actions)
   */
  toolbar?: Toolbar;

  /**
   * Totalizers property
   *
   * @default []
   * @enum {string} - One of type: 'array', 'shape'
   */
  totalizers?: Totalizer[];

  /**
   * Forces table re-render when changed
   */
  updateTableKey?: string;
};

type OnRowClickParams = {
  event: Event;
  index: number;
  rowData: Record<string, unknown>;
};

type Filters = {
  alwaysVisibleFilters?: string[];
  clearAllFiltersButtonLabel: string;
  collapseLeft?: boolean;
  statements?: unknown;
  onChangeStatements?: unknown;
  options?: Record<string, FilterOption>;
};

type FilterOption = {
  label: string;
  renderFilterLabel?: string;
  verbs: FilterOptionObject[];
};

type FilterOptionObject = {
  label: string;
  value: string;
  object: unknown;
};

type Totalizer = {
  label: string;
  value: number | string;
  iconBackgroundColor?: string;
  icon?: React.ReactNode;
  isLoading?: boolean;
};

type Schema = {
  properties: Record<string, SchemaProperty>;
};

type SchemaProperty = {
  title: string;
  width?: number;
  /**
   * @default 200
   */
  minWidth?: number;
  cellRenderer?: CellRendererFunc;
};

type CellRendererFunc = (params: CellRendererParams) => React.ReactNode;

type CellRendererParams<C = any, R = any> = {
  cellData: C;
  rowData: R;
  updateCellMeasurements: () => void;
};

type Toolbar = {
  newLine?: NewLineObject;
  density?: DensityObject;
  download?: DownloadObject;
  upload?: UploadObject;
  fields?: FieldsObject;
  inputSearch?: inputSearchObject;
};

type CommonObject = {
  label: string;
  handleCallback: () => void;
};

type NewLineObject = CommonObject;

type DensityObject = {
  buttonLabel: string;
  lowOptionLabel: string;
  mediumOptionLabel: string;
  highOptionLabel: string;
};

type DownloadObject = CommonObject;

type UploadObject = CommonObject;

type FieldsObject = {
  label: string;
  showAllLabel: string;
  hideAllLabel: string;
  onToggleColumn?: (params: OnToggleColumnParams) => void;
  onHideAllColumns?: (activeFields: string[]) => void;
  onShowAllColumns?: (activeFields: string[]) => void;
};

type OnToggleColumnParams = {
  toggledField: string;
  activeFields: string[];
};

type inputSearchObject = {
  value: string;
  placeholder: string;
  onChange: (paramns: any) => void;
  onClear: () => void;
  onSubmit: (e: CustomOnSubmitEvent) => void;
};


type LineActionParams = {
  rowData: Record<string, unknown>;
} 