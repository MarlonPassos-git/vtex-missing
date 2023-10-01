import type { FC } from 'react';

/**
 * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Display/Tag)
 */
type Tag = FC<TagProps>;

type TagProps = {
  /**
   * Content of the button
   *
   * @required
   */
  children: React.ReactNode;

  /**
   * Background color of the button
   */
  bgColor?: string;

  /**
   * Text color of the button
   */
  color?: string;

  /**
   * Determines whether the button is disabled
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * Event handler for the button click
   */
  onClick?: () => void;

  /**
   * Input size
   *
   * @enum {string} - One of: 'small', 'regular', 'large'
   * @default 'regular'
   */
  size?: 'small' | 'regular' | 'large';

  /**
   * Type of button
   *
   * @enum {string} - One of: 'success', 'error', 'warning'
   */
  type?: 'success' | 'error' | 'warning';

  /**
   * Variation of button
   *
   * @enum {string} - One of: 'default', 'low'
   */
  variation?: 'default' | 'low';
};
