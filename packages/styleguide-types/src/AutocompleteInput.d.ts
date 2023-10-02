import type { FC, ReactNode } from 'react';

/**
 * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Forms/AutocompleteInput)
 */
type AutocompleteInput = FC<Props>;

type AutocompleteInputProps = {
  input: Input;
  options: Options;
};

type Input = {
  onClear: () => void;
  onSearch: (...args: unknown[]) => void;
  onChange: (data?: unknown) => void;
  value?: string;
  disabled?: boolean;
  error?: boolean;
  placeholder?: string;
  errorMessage?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
};

type Options = {
  loading?: boolean;
  renderOption?: (option?: unknown) => ReactNode;
  value?: Value[];
  icon?: ReactNode;
  onSelect: (data?: Value) => void;
  lastSearched?: unknown;
  size?: Size;
  customMessage?: ReactNode;
};

type Value = {
  value: TValue;
  label: string;
};

type Size = 'small' | 'regular' | 'large';