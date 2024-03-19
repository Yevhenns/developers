import { HTMLProps, ReactNode } from 'react';
import css from './Button.module.scss';

export type ButtonProps = {
  type?: 'button' | 'submit';
  label?: string;
  children?: ReactNode;
  onClick?: () => void;
} & HTMLProps<HTMLButtonElement>;

export function Button({ type = 'button', children, label, onClick, ...props }: ButtonProps) {
  return (
    <button type={type} className={css.button} onClick={onClick} {...props}>
      {label}
      {children}
    </button>
  );
}
