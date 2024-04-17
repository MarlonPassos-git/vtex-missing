import type { FC, ChangeEventHandler } from 'react';

/**
 * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Forms/NumericStepper)
 */
type NumericStepper = FC<AlertProps>;

type NumericStepperProps = {
    /**
     * Event handler for when the value changes
     * @required
     */
    onChange: (e: { value: number }) => void;

    /**
     * Determines if the input should be displayed as a block (taking the full width)
     * @default false
     */
    block?: boolean;

    /**
     * Initial value for the input when there is no user interaction yet
     * @default 0
     */
    defaultValue?: number;

    /**
     * Label for the input field
     */
    label?: string;

    /**
     * Enables a leaner visual style for the input
     */
    lean?: boolean;

    /**
     * Maximum value the input can hold, null or Infinity if there is no maximum
     * @default Infinity
     */
    maxValue?: number | null;

    /**
     * Minimum value the input can hold, set to null or -Infinity if there is no minimum
     * @default 0
     */
    minValue?: number | null;

    /**
     * Makes the input readonly and disables any interactive elements associated with it
     * @default false
     */
    readOnly?: boolean;

    /**
     * Size of the input
     * One of 'small', 'regular', 'large'
     * @default 'regular'
     */
    size?: 'small' | 'regular' | 'large';

    /**
     * Text or symbol displayed as a suffix to the value (e.g., Kg, un)
     */
    suffix?: string;

    /**
     * Multiplier applied to the raw input value (e.g., for unit conversions)
     * @default 1
     */
    unitMultiplier?: number;

    /**
     * Current value of the input
     */
    value?: number;
}
