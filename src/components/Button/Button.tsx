import { HTMLProps } from 'react';
import css from './Button.module.scss';

export type ButtonProps = {
  type?: 'button' | 'submit';
  label?: string;
} & HTMLProps<HTMLButtonElement>;

export function Button({ type = 'button', label, disabled, ...props }: ButtonProps) {
  return (
    <button type={type} className={[css.button, disabled && css.disabled].join(' ')} disabled={disabled} {...props}>
      {label}
    </button>
  );
}
