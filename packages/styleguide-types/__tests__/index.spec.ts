import type { AlertProps } from '../src/Alert';
import type { DropdownProps } from "../src/Dropdown"
import { testType } from './test-utils';

// @dts-jest:group Alert
{
  // @dts-jest:pass:snap
  testType<AlertProps>({
    children: 'children',
    type: 'success',
    action: {
      label: 'label',
      onClick: () => {}
    },
    autoClose: 1000,
    closeIconLabel: 'closeIconLabel',
    focusOnOpen: true,
    onClose: () => {}
  });
}

// @dts-jest:group Dropdown
{
  // @dts-jest:pass:snap
  testType<DropdownProps>({
    label:"Disabled",
      disabled: true,
      options: [
      { value: 'visa', label: 'Visa' },
      { value: 'mastercard', label: 'Mastercard' },
      { value: 'elo', label: 'Elo' },
      { value: 'diners', label: 'Diners' },
      { value: 'giftcard', label: 'Gift Card' },
      { value: 'amex', label: 'American Express' },
    ],
      value: 'mastercard',
      onChange: (_, v) => {}
  });
}
