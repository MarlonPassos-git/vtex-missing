import type { FC } from 'react';

/**
 * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Notification/Alert)
 */
type Alert = FC<Props>;

type Props = {
  /**
   * Content of the alert
   *
   * @required
   */
  children: React.ReactNode;

  /**
   * Style of the alert
   *
   * @required
   * @enum {string} - One of: 'success', 'error', 'warning'
   */
  type: 'success' | 'error' | 'warning';

  /**
   * If this object is defined, an action button will appear on the right side of the alert.
   */
  action?: {
    /**
     * Required function to be called when the action button is clicked.
     *
     * @required
     */
    onClick: () => void;

    /**
     * Required label for the action button.
     *
     * @required
     */
    label: React.ReactNode;
  };

  /**
   * Time in ms to auto close the alert
   */
  autoClose?: number;

  /**
   * Defines the title used for hover and accessibility feedback
   */
  closeIconLabel?: string;

  /**
   * Set focus to the first focusable element inside the alert, which should be the "action" when available or the "close" button
   */
  focusOnOpen?: boolean;

  /**
   * If this function is defined, a close icon will appear, and this function will be called when the alert is closed.
   */
  onClose?: () => void;
};
