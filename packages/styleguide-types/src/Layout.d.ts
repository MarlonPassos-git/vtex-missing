import type { FC, PropsWithChildren, ReactNode } from 'react';

/**
 * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Admin%20structure/Layout)
 */
type Layout = FC<PropsWithChildren<Props>>;

type Props = {
  fullWidth?: boolean;
  pageHeader: ReactNode;
};
