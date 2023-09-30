import type { FC } from 'react';

/**
 * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Forms/DatePicker)
 */
type DatePicker = FC<Props>;

type Props = {
  /**
   * Locale string ('en-US', 'pt-BR', ...)
   *
   * @required
   */
  locale: string;

  /**
   * Event handler for when the input value changes.
   *
   * @required
   * @param stringData - should be a string in the following format: 'Wed Sep 13 2023 15:37:24 GMT-0300 (Horário Padrão de Brasília)'
   */
  onChange: (stringData: string) => void;

  /**
   * Value of the selected date
   */
  value?: Date;

  /**
   * Popper alignment in relation to the input
   *
   * @default 'left'
   * @enum {string} - One of: 'left', 'right'
   */
  align?: 'left' | 'right';

  /**
   * Spec attribute
   *
   * @default false
   */
  autoFocus?: boolean;

  /**
   * Popper position in relation to the input
   *
   * @default 'down'
   * @enum {string} - One of: 'down', 'up'
   */
  direction?: 'down' | 'up';

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
   * Dates to be excluded
   */
  excludeDates?: Date[];

  /**
   * Times to be excluded
   */
  excludeTimes?: Date[];

  /**
   * Help text
   */
  helpText?: React.ReactNode;

  /**
   * Spec attribute
   */
  id?: string;

  /**
   * Dates to be included
   */
  includeDates?: Date[];

  /**
   * Times to be included
   */
  includeTimes?: Date[];

  /**
   * Label
   */
  label?: string;

  /**
   * Disables out-of-bounds month navigation
   *
   * @default false
   */
  limitMonthNavigation?: boolean;

  /**
   * Max possible date
   */
  maxDate?: Date;

  /**
   * Upper time limit
   */
  maxTime?: Date;

  /**
   * Minimum possible date
   */
  minDate?: Date;

  /**
   * Lower time limit
   */
  minTime?: Date;

  /**
   * Spec attribute
   */
  name?: string;

  /**
   * onBlur event
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;

  /**
   * onFocus event
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;

  /**
   * Placeholder text
   */
  placeholder?: string;

  /**
   * Sets the popper to position fixed. Fixes issues with overflow: hidden.
   */
  positionFixed?: boolean;

  /**
   * Spec attribute
   *
   * @default false
   */
  readOnly?: boolean;

  /**
   * Spec attribute
   *
   * @default false
   */
  required?: boolean;

  /**
   * DatePicker size
   *
   * @default 'regular'
   * @enum {string} - One of: 'small', 'regular', 'large'
   */
  size?: 'small' | 'regular' | 'large';

  /**
   * Spec attribute
   */
  tabIndex?: string;

  /**
   * Interval between times (in min)
   */
  timeIntervals?: number;

  /**
   * Flag used for indicating whether to use time or not
   */
  useTime?: boolean;
};
