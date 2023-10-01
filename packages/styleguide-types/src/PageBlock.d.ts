import type { FC, PropsWithChildren } from 'react';

/**
 * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Admin%20structure/PageBlock)
 */
type PageBlock = FC<PropsWithChildren<PageBlockProps>>;

type PageBlockProps = {
  boxProps?: BoxProps;
  /**
   * @default 'none'
   */
  fit?: Fit;
  subtitle?: string;
  testId?: string;
  title?: string;
  titleAside?: ReactNode;
  /**
   * @default 'full'
   */
  variation?: Variation;
};

type BoxProps = {
  noPadding: boolean;
  title: string;
};

type Fit = 'fill' | 'fill-horizontal' | 'fill-vertical' | 'none';

type Variation = 'full' | 'half' | 'annotated' | 'aside';
