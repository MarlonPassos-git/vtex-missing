import type { FC, PropsWithChildren } from 'react';

/**
 * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Forms/Button)
 */
type Button = FC<PropsWithChildren<Props>>;

/**
 * @todo add description of props
 */
type Props = {
  /**
   * @deprecated
   * @default false
   */
  icon?: boolean;
  autoComplete?: string;
  /**
   * @default false
   */
  autoFocus?: boolean;
  /**
   * @default false
   */
  block?: boolean;
  /**
   * @default false
   */
  disabled?: boolean;
  download?: boolean;
  href?: string;
  id?: string;
  /**
   * @default false
   */
  isActiveOfGroup?: boolean;
  /**
   * @default false
   */
  isFirstOfGroup?: boolean;
  /**
   * @default false
   */
  isGrouped?: boolean;
  /**
   * @default false
   */
  isLastOfGroup?: boolean;
  /**
   * @default false
   */
  isLoading?: boolean;
  name?: string;
  noWrap?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
  onMouseUp?: () => void;
  onMouseDown?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onTouchEnd?: () => void;
  onTouchMove?: () => void;
  onTouchStart?: () => void;
  referrerPolicy?: string;
  rel?: string;
  size?: Size;
  /**
   * @default 0
   */
  tabIndex?: number;
  target?: string;
  testId?: string;
  /**
   * @default 'button'
   */
  type?: string;
  value?: string;
  /**
   * @default 'primary'
   */
  variation?: Variation;
};

type Size = 'small' | 'regular' | 'large';

type Variation =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'inverted-tertiary'
  | 'danger'
  | 'danger-tertiary';
