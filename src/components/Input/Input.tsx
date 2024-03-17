import { FC, HTMLProps, forwardRef } from 'react';
import css from './Input.module.scss';

export type InputProps = HTMLProps<HTMLInputElement>;

export const Input: FC<InputProps> = forwardRef(({ ...props }, ref) => {
  return (
    <div className={css.fieldset}>
      <input className={css.input} autoComplete="true" {...props} ref={ref} />
      <label htmlFor={props.htmlFor}>{props.label}</label>
    </div>
  );
});
