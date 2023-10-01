import type { FC, PropsWithChildren, ReactNode } from 'react';

/**
 * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Admin%20structure/Layout)
 */
type Layout = FC<PropsWithChildren<LayoutProps>>;

type LayoutProps = {
  fullWidth?: boolean;
  pageHeader: ReactNode;
};
