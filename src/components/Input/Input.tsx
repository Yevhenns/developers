import { HTMLProps } from 'react';
import css from './Input.module.scss';

export type InputProps = HTMLProps<HTMLInputElement>;

export function Input({ ...props }: InputProps) {
  return <input className={css.input} autoComplete="true" {...props} />;
}
