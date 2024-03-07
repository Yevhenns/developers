import { SignUpForm } from '../SignUpForm';
import css from './SignUpSection.module.scss';

export function SignUpSection() {
  return (
    <section className={css.section}>
      <h2>Working with POST request</h2>
      <SignUpForm />
    </section>
  );
}
