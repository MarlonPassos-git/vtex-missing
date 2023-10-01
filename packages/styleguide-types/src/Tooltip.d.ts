import type { FC } from 'react';

/**
 * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Display/Tooltip)
 */
type Tooltip = FC<TooltipProps>;

type TooltipProps = {
  /**
   * Element that will trigger the event
   *
   * @required
   */
  children: React.ReactElement;

  /**
   * Label to be shown. As element, can be a string, number...
   *
   * @required
   */
  label: React.ReactNode;

  /**
   * Container element for the popup's portal to be rendered (default: document.body)
   */
  container?: React.ReactNode;

  /**
   * Delay to show and hide the tooltip (ms)
   *
   * @default 0
   */
  delay?: number;

  /**
   * Tooltip animation duration (ms)
   *
   * @default 200
   */
  duration?: number;

  /**
   * Fallback position. Used when the tooltip cannot be shown in the original position
   *
   * @enum {string} - One of: 'top', 'right', 'bottom', 'left'
   */
  fallbackPosition?: 'top' | 'right' | 'bottom' | 'left';

  /**
   * Tooltip position
   *
   * @default 'top'
   * @enum {string} - One of: 'top', 'right', 'bottom', 'left'
   */
  position?: 'top' | 'right' | 'bottom' | 'left';

  /**
   * Tooltip font size
   *
   * @default 'small'
   * @enum {string} - One of: 'mini', 'small'
   */
  size?: 'mini' | 'small';

  /**
   * Tooltip timing function used to animate the tooltip
   *
   * @default 'ease-in-out'
   */
  timingFn?: string;

  /**
   * Event to trigger the tooltip
   *
   * @default 'hover'
   * @enum {string} - One of: 'click', 'hover', 'focus'
   */
  trigger?: 'click' | 'hover' | 'focus';

  /**
   * Element that inserts line break style in the word. Used to prevent width overflow
   *
   * @default 'normal'
   * @enum {string} - One of: 'normal', 'break-all', 'keep-all', 'break-word'
   */
  wordBreak?: 'normal' | 'break-all' | 'keep-all' | 'break-word';
};
