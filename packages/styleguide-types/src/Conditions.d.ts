import type { FC } from 'react';
import { Value } from './AutocompleteInput';
import React from 'react';

/**
 * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Notification/Alert)
 */
type Conditions = FC<AlertProps>;

type ConditionsProps = {
    /**
     * Array of possible options for subjects, verbs, and their respective data types
     * @required
     */
    options: any;  // Type should be more specific based on what 'options' contains

    /**
     * Placeholder text for the subject dropdown
     * @required
     */
    subjectPlaceholder: string;

    /**
     * Shows or hides the delete button
     */
    canDelete?: boolean;

    /**
     * Whether to show or hide the header that selects the operator (any vs all)
     * @default false
     */
    hideOperator?: boolean;

    /**
     * Whether to stretch the component to the full width of its container
     */
    isFullWidth?: boolean;

    /**
     * Specifies if the layout is right-to-left
     */
    isRtl?: boolean;

    /**
     * Custom labels for the controls and texts, default is English
     * @default {}
     */
    labels?: {
        addNewCondition: string;
        addConditionBtn: string;
        delete: string;
        noConditions: string;
        operatorAll: string;
        operatorAnd: string;
        operatorAny: string;
        operatorOr: string;
        headerPrefix: string;
        headerSuffix: string;
    };

    /**
     * Callback function for when the operator (any, all) changes
     */
    onChangeOperator?: (operator: 'all' | 'any') => void;

    /**
     * Callback function for changes in conditions; receives an array of statement definitions
     */
    onChangeStatements?: (statements: Array<{ subject: string; verb: string; object: any; error?: string }>) => void;

    /**
     * Indicates whether all statements should be met or any of them
     * @default 'any'
     */
    operator?: 'all' | 'any';

    /**
     * Array of condition statements, each statement includes subject, verb, object, and possible error message
     * @default []
     */
    statements?: Array<{
        subject: string;
        verb: string;
        object: any;  // The type should be specified based on the context
        error?: string;
    }>;
}

type Option = {
    label: string;
    verbs: Record<string, Verb>;
}

type Verb = {
    label: string
    value: string
    object: (option: { value: string, onChange: (a?: string) => {} }) => React.ReactNode
}