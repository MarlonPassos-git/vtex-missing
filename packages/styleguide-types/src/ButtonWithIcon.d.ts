import type { FC, ReactNode } from 'react';
import type { Props as ButtonProps } from './Button';

/**
 * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Forms/ButtonWithIcon)
 */
type ButtonWithIcon = FC<Props>;

/**
 * @todo add description of props
 */
type Props = Omit<ButtonProps, 'icon'> & {
  icon: ReactNode;
  /**
   * @default 'left'
   */
  iconPosition?: IconPosition;
};

type IconPosition = 'left' | 'right';
