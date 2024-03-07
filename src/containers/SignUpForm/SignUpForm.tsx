import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import css from './SignUpForm.module.scss';

export function SignUpForm() {
  return (
    <form className={css.form}>
      <Input placeholder="Your name" name="name" />
      <Input placeholder="Email" name="email" />
      <Input placeholder="Phone" name="phone" />
      <Input type="file" placeholder="Email" name="email" />
      <Button label="Sign up" />
    </form>
  );
}
