import type { FC } from 'react';

/**
 * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Display/EmptyState)
 */
type EmptyState = FC<EmptyStateProps>;

type EmptyStateProps = {
  /**
   * Content of the alert
   *
   */
  children?: React.ReactNode;

  /**
   * Component's height
   *
   */
  height?: number

  /**
   * Data attribute
   */
  testId?: string;

  /**
   * Title of the component (String)
   * 
   * @requires
   */
  title: string | React.ReactNode
};
