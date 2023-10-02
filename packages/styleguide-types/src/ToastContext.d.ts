import type React from 'react';

type ShowToastProps = {
  message: string;
  horizontalPosition?: 'left' | 'right';
  action?: {
    label: string;
    onClick?: () => void;
    href?: string;
    target?: string;
    rel?: string;
    download?: string;
  };
  keepAfterUpdate?: boolean;
  visible?: boolean;
  /**
   * Tempo em milissegundos que o toast ficará visível.
   *
   * Se voce passar `Infinity`, o toast não será fechado automaticamente.
   */
  duration?: number;
  /**
   * Se vai exibir o botão de fechar.
   * Se passar false, o toast não ser fechado.
   *
   * @default true
   */
  dismissable?: boolean;
};

type ToastContextState = {
  showToast: (props: ShowToastProps) => void;
  hideToast: () => void;
  toastState: unknown;
};

type ToastContext = React.Context<ToastContextState>;
