import type { Props } from '../src/Alert';
import { testType } from './test-utils';

// @dts-jest:group Alert
{
  // @dts-jest:pass:snap
  testType<Props>({
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
