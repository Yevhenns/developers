import css from './Button.module.scss';

export type ButtonProps = {
  label: string;
};

export function Button({ label }: ButtonProps) {
  return <button className={css.button}>{label}</button>;
}
