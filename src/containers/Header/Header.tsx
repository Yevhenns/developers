import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';
import css from './Header.module.scss';

export function Header() {
  return (
    <header className={css.header}>
      <div className={css.wrapper}>
        <Logo />
        <nav>
          <Button label="Users" onClick={() => console.log('Users')} />
          <Button label="Sign up" onClick={() => console.log('Sign up')} />
        </nav>
      </div>
    </header>
  );
}
