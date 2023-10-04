import type { FC } from 'react';

/**
 * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Forms/Dropdown)
 */
type Dropdown = FC<DropdownProps>;

type DropdownProps = {
  /**
   * Spec attribute
   */
  autoFocus?: boolean;

  /**
   * Spec attribute
   */
  disabled?: boolean;

  /**
   * Error highlight
   */
  error?: boolean;

  /**
   * Error message
   */
  errorMessage?: React.ReactNode;

  /**
   * Spec attribute
   */
  form?: string;

  /**
   * Help text
   */
  helpText?: React.ReactNode;

  /**
   * Spec attribute
   */
  id?: string;

  /**
   * Dropdown label
   */
  label?: React.ReactNode;

  /**
   * Spec attribute
   */
  name?: string;

  /**
   * onBlur event
   */
  onBlur?: () => void;

  /**
   * onChange event
   */
  onChange?: (e: unknown, value: string ) => void;

  /**
   * onFocus event
   */
  onFocus?: () => void;

  /**
   * onMouseEnter event
   */
  onMouseEnter?: () => void;

  /**
   * onMouseLeave event
   */
  onMouseLeave?: () => void;

  /**
   * Dropdown options list
   */
  options?: {
    /**
     * Disabled option
     */
    disabled?: boolean;

    /**
     * Required union value
     *
     * @required
     */
    value: string | number;

    /**
     * Required union label
     *
     * @required
     */
    label: string | number;

    /**
     * Dropdown placeholder value
     *
     * @enum {string} - One of type: 'string', 'number'
     */
    placeholder?: string | number;

    /**
     * Prevent truncating large options texts on some devices/browsers, such as iOS
     */
    preventTruncate?: boolean;
  }[];

  /**
   * Spec attribute
   */
  required?: boolean;

  /**
   * Data attribute for select
   */
  selectTestId?: string;

  /**
   * Dropdown size
   *
   * @default 'regular'
   * @enum {string} - One of: 'small', 'regular', 'large'
   */
  size?: 'small' | 'regular' | 'large';

  /**
   * Data attribute
   */
  testId?: string;

  /**
   * Spec attribute
   */
  value?: string | number;

  /**
   * Dropdown variation
   *
   * @default 'default'
   * @enum {string} - One of: 'default', 'inline'
   */
  variation?: 'default' | 'inline';
};
