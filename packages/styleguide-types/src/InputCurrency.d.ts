import type { FC, ChangeEventHandler } from 'react';

/**
 * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Forms/InputCurrency)
 */
type InputCurrency = FC<Props>;

type Props = {
  /**
   * Currency code in ISO 4217 ('USD', 'BRL', etc.)
   *
   * @required
   */
  currencyCode: CurrencyCode | string;
  /**
   * Locale ISO string ('en-US', 'pt-BR', etc.)
   *
   * @required
   */
  locale: Locale | string;
  /**
   * Default value for the input.
   */
  defaultValue?: number;
  /**
   * Event handler for when the input value changes.
   *
   * @_onChange event. You can get the numeric value of the input from the event as event.target.floatValue
   */
  onChange?: ChangeEventHandler;
  /**
   * Event handler for clearing the input.
   */
  onClear?: () => void;
  /**
   * Size of the input.
   */
  size?: string;
  /**
   * Numeric value of the input.
   */
  value?: number;
  /**
   * label
   */
  label?: string;
  /**
   * Placeholder text.
   */
  placeholder?: string;
  /**
   * Whether the input is disabled.
   */
  readOnly?: boolean;
};

type CurrencyCode = 'USD' | 'BRL';

type Locale = 'en-US' | 'pt-BR';
