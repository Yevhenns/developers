import { HTMLProps } from 'react';
import css from './Button.module.scss';

export type ButtonProps = {
  type?: 'button' | 'submit';
  label: string;
  onClick?: () => void;
} & HTMLProps<HTMLButtonElement>;

export function Button({ type = 'button', label, onClick }: ButtonProps) {
  return (
    <button type={type} className={css.button} onClick={onClick}>
      {label}
    </button>
  );
}
