import type { FC, PropsWithChildren, ReactNode } from 'react';



/**
 * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Admin%20structure/PageHeader)
 */
type PageHeader = FC<PropsWithChildren<PageHeaderProps>>;

type PageHeaderProps = {
  title: ReactNode;
  linkLabel?: ReactNode;
  onLinkClick?: () => void;
  subtitle?: ReactNode;
};