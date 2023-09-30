import type { FC, ChangeEventHandler } from 'react';
import { CustomOnSubmitEvent } from './common';

/**
 * @see [oficial documentation](https://styleguide.vtex.com/#/Components/Forms/InputSearch)
 */
type InputSearch = FC<Props>;

type Props = {
  disabled?: boolean;
  onChange?: ChangeEventHandler;
  onClear?: () => void;
  onSubmit?: (e?: CustomOnSubmitEvent) => void;
  size?: string;
  value?: string;
  placeholder?: string;
  label?: string;
};
