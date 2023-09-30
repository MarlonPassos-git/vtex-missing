import type { FC } from 'react';

/**
 * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Notification/Spinner)
 */
type Spinner = FC<Props>;

type Props = {
  /**
   * Sets the display to block
   *
   * @default false
   */
  block?: boolean;
  /**
   * Color of the spinner
   */
  color?: string;
  /**
   * Size (diameter) of the spinner
   *
   * @default 40
   */
  size?: number;
};
