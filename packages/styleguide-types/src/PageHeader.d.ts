import type { FC, PropsWithChildren, ReactNode } from 'react';

type Props = {
  title: ReactNode;
  linkLabel?: ReactNode;
  onLinkClick?: () => void;
  subtitle?: ReactNode;
};

/**
 * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Admin%20structure/PageHeader)
 */
type PageHeader = FC<PropsWithChildren<Props>>;
