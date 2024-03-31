import { RefObject } from 'react';
import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';
import { handleScroll } from '../../helpers';
import css from './Header.module.scss';

type HeaderProps = {
  developersRef: RefObject<HTMLDivElement>;
  signUpRef: RefObject<HTMLDivElement>;
};

export function Header({ developersRef, signUpRef }: HeaderProps) {
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
