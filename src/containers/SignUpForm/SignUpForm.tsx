import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { RadioButtons } from '../../components/RadioButtons';
import css from './SignUpForm.module.scss';

export type SignUpFormProps = {
  positions: Positions;
};

export function SignUpForm({ positions }: SignUpFormProps) {
  return (
    <form className={css.form}>
      <Input placeholder="Your name" name="name" />
      <Input placeholder="Email" name="email" />
      <Input placeholder="Phone" name="phone" />
      <Input type="file" placeholder="Email" name="email" />
      <RadioButtons positions={positions} />
      <Button label="Sign up" type="submit" onClick={() => console.log('Sign up')} />
    </form>
  );
}
