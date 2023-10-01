import type { FC } from 'react';

/**
 * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Notification/ToastProvider)
 */
type ToastProvider = FC<ToastProviderProps>;

type ToastProviderProps = {
  /**
   * @default 'parent'
   */
  positioning?: Position;
};

type Position = 'parent' | 'window';
