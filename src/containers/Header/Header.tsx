import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';
import css from './Header.module.scss';

export function Header() {
  return (
    <header className={css.header}>
      <div className={css.wrapper}>
        <Logo />
        <nav>
          <Button>
            <a href="#users">Users</a>
          </Button>
          <Button>
            <a href="#signup">Sign up</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
