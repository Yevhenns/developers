import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';
import { handleScroll } from '../../helpers';
import css from './Header.module.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Header({ developersRef, signUpRef }: any) {
  return (
    <header className={css.header}>
      <div className={css.wrapper}>
        <Logo />
        <nav>
          <Button label="Users" onClick={() => handleScroll(developersRef.current)} />
          <Button label="Sign up" onClick={() => handleScroll(signUpRef.current)} />
        </nav>
      </div>
    </header>
  );
}
