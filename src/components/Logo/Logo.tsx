import css from './Logo.module.scss';

export function Logo() {
  return (
    <a className={css.logo} href="/">
      <img src="/logo.svg" />
      TESTTASK
    </a>
  );
}
