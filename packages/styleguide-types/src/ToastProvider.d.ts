import type { FC } from 'react';

/**
 * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Notification/ToastProvider)
 */
type ToastProvider = FC<Props>;

type Props = {
  /**
   * @default 'parent'
   */
  positioning?: Position;
};

type Position = 'parent' | 'window';
