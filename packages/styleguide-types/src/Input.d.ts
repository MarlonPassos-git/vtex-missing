import type { FC, ChangeEventHandler, ReactElement } from 'react';

/**
 * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Admin%20structure/Layout)
 */
type Input = FC<InputProps>;

type InputProps = {
  /**
   * Spec attribute
   */
  accept?: string;
  /**
   * Spec attribute
   */
  autoComplete?: string;
  /**
   * Spec attribute
   */
  autoCorrect?: string;
  /**
   * Spec attribute
   *
   * @default false
   */
  autoFocus?: boolean;
  /**
   * Spec attribute
   */
  autoSave?: string;
  /**
   * List of data attributes as an object like {'locale': 'en-US'}
   */
  dataAttributes?: object;

  /**
   * Spec attribute
   */
  defaultValue?: string;

  /**
   * Spec attribute
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * Error highlight
   *
   * @default false
   */
  error?: boolean;
  /**
   * Error message
   */
  errorMessage?: string;
  /**
   * Whether the border should join with an element below
   */
  groupBottom?: boolean;
  /**
   * Help text
   */
  helpText?: React.ReactNode;
  /**
   * Spec attribute
   */
  id?: string;
  /**
   * Spec attribute
   */
  inputMode?: string;
  /**
   * Label
   *
   * One of type: string, React.Element
   */
  label?: string | React.ReactElement;
  /**
   * Spec attribute
   */
  list?: string;
  /**
   * Spec attribute
   */
  max?: string;
  /**
   * Spec attribute
   *
   * One of type: number, string
   */
  maxLength?: number | string;
  /**
   * Spec attribute
   */
  min?: string;

  /**
   * Spec attribute
   */
  minLength?: string;
  /**
   * Spec attribute
   *
   * @default false
   */
  multiple?: boolean;
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
  onChange?: ChangeEventHandler;
  /**
   * onFocus event
   */
  onFocus?: () => void;
  /**
   * onKeyDown event
   */
  onKeyDown?: () => void;
  /**
   * onKeyPress event
   */
  onKeyPress?: () => void;
  /**
   * onKeyUp event
   */
  onKeyUp?: () => void;
  /**
   * onMouseEnter event
   */
  onMouseEnter?: () => void;
  /**
   * onMouseLeave event
   */
  onMouseLeave?: () => void;
  /**
   * Spec attribute
   */
  pattern?: string;
  /**
   * Spec attribute
   */
  placeholder?: string;
  /**
   * Prefix
   */
  prefix?: React.ReactNode;
  /**
   * Spec attribute
   *
   * @default false
   */
  readOnly?: boolean;
  /**
   * Spec attribute
   */
  required?: boolean;
  /**
   * Input size
   *
   * One of: small, regular, large
   *
   * @default 'regular'
   */
  size?: 'small' | 'regular' | 'large';
  /**
   * Spec attribute
   */
  spellCheck?: string;
  /**
   * Spec attribute
   */
  src?: string;
  /**
   * Spec attribute
   */
  step?: string;
  /**
   * Suffix attribute
   */
  suffix?: React.ReactNode;
  /**
   * DEPRECATED: Suffix icon attribute
   */
  suffixIcon?: React.ReactElement;
  /**
   * Spec attribute
   */
  tabIndex?: string;
  /**
   * Data attribute
   */
  testId?: string;
  /**
   * If the input is an API Key, App Key, or App Token
   *
   * @default false
   */
  token?: boolean;
  /**
   * Spec attribute
   *
   * @default 'text'
   */
  type?: string;
  /**
   * Spec attribute
   */
  value?: string | number;
};

