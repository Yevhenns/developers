import { HTMLProps, ReactNode } from 'react';
import css from './Button.module.scss';

export type ButtonProps = {
  type?: 'button' | 'submit';
  label?: string;
  children?: ReactNode;
} & HTMLProps<HTMLButtonElement>;

export function Button({ type = 'button', label, ...props }: ButtonProps) {
  return (
    <button type={type} className={css.button} {...props}>
      {label}
    </button>
  );
}
