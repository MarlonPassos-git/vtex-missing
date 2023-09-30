import type { FC } from 'react';

/**
 * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Overlays/ModalDialog)
 */
type ModalDialog = FC<Props>;

type Props = {
  centered?: boolean;
  isOpen?: boolean;
  /**
   * Modal cancellation button configuration
   *
   * @required
   */
  cancelation: {
    /**
     * Required label for the cancellation button
     *
     * @required
     */
    label: string;

    /**
     * Required function to be called when the cancellation button is clicked
     *
     * @required
     */
    onClick: () => void;

    /**
     * Data attribute for testing
     */
    testId?: string;
  };

  /**
   * Modal confirmation button configuration
   *
   * @required
   */
  confirmation: {
    /**
     * Required label for the confirmation button
     *
     * @required
     */
    label: string;

    /**
     * Required function to be called when the confirmation button is clicked
     *
     * @required
     */
    onClick: () => void;

    /**
     * Mark whether the action performed is dangerous or not
     */
    isDangerous?: boolean;

    /**
     * Data attribute for testing
     */
    testId?: string;
  };

  /**
   * Content to be displayed inside the modal
   */
  children?: React.ReactNode;

  /**
   * Controls the loading state of the modal
   */
  loading?: boolean;

  /**
   * Callback function to be called when the modal is closed
   */
  onClose?: () => void;

  /**
   * Callback function to be called after the modal's close transition finishes
   */
  onCloseTransitionFinish?: () => void;
};
