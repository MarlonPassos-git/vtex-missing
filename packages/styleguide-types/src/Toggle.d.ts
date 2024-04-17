import type { FC } from 'react';

/**
 * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Forms/Toggle)
 */
type Toggle = FC<ToggleProps>;

type ToggleProps = {
  /**
   * Indicates whether the checkbox is checked
   * @default false
   */
  checked?: boolean;

  /**
   * Indicates whether the checkbox is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Help text or additional information related to the checkbox
   */
  helpText?: React.ReactNode;

  /**
   * Unique identifier for the checkbox
   */
  id?: string;

  /**
   * Label content, can be a string or a React element
   */
  label?: string | React.ReactElement;

  /**
   * Name attribute of the checkbox
   */
  name?: string;

  /**
   * Function called when the checkbox value changes
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Function called when the checkbox is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;

  /**
   * Specifies if the checkbox should use semantic HTML
   * @default false
   */
  semantic?: boolean;

  /**
   * Size of the checkbox
   * @default "regular"
   * One of 'regular', 'large'
   */
  size?: 'regular' | 'large';

  /**
   * Identifier for testing purposes
   */
  testId?: string;
}

