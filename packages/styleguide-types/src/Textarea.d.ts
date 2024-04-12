import type { FC } from 'react';

/**
 * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Forms/Textarea)
 */
type Textarea = FC<TextareaProps>;

type TextareaProps = {
    /**
     * Controls the browser's autocomplete feature
     */
    autoComplete?: "off" | "on";

    /**
     * Automatically focuses the textarea when the page loads
     * @default false
     */
    autoFocus?: boolean;

    /**
     * Helper text for character countdown (X characters left)
     */
    characterCountdownText?: string;

    /**
     * Content of the textarea
     */
    children?: string;

    /**
     * List of data attributes as an object like {'locale': 'en-US'}
     */
    dataAttributes?: Record<string, string>;

    /**
     * Default content of the textarea
     */
    defaultValue?: string;

    /**
     * Indicates whether the textarea is disabled
     * @default false
     */
    disabled?: boolean;

    /**
     * Error highlight
     * @default false
     */
    error?: boolean;

    /**
     * Error message if an error is present
     */
    errorMessage?: string;

    /**
     * Help text or additional information related to the textarea
     */
    helpText?: React.ReactNode;

    /**
     * Unique identifier for the textarea
     */
    id?: string;

    /**
     * Label content, can be a string or a React element
     */
    label?: string | React.ReactElement;

    /**
     * Maximum length of the input
     */
    maxLength?: string;

    /**
     * Minimum length of the input
     */
    minLength?: string;

    /**
     * Name attribute of the textarea
     */
    name?: string;

    /**
     * Function called when the textarea loses focus
     */
    onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;

    /**
     * Function called when the textarea's value changes
     */
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;

    /**
     * Function called when the textarea gains focus
     */
    onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;

    /**
     * Placeholder text for the textarea
     */
    placeholder?: string;

    /**
     * Indicates if the textarea is read-only
     * @default false
     */
    readOnly?: boolean;

    /**
     * Indicates if the textarea is required
     */
    required?: boolean;

    /**
     * Controls if and how the textarea can be resized
     * @default "both"
     * One of 'both', 'horizontal', 'none', 'vertical'
     */
    resize?: 'both' | 'horizontal' | 'none' | 'vertical';

    /**
     * Specifies the visible number of lines in a text area
     */
    rows?: number;

    /**
     * Size of the textarea
     * One of 'small', 'regular', 'large'
     */
    size?: 'small' | 'regular' | 'large';

    /**
     * Controls the spell check feature of the textarea
     */
    spellCheck?: "true" | "false" | "default";

    /**
     * Controlled content of the textarea
     */
    value?: string;

    /**
     * Specifies how the text in a text area is to be wrapped when submitted in a form
     */
    wrap?: "hard" | "soft" | "off";
}