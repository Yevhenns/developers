import { Container } from '../../components/Container';
import { SignUpForm } from '../SignUpForm';
import css from './SignUpSection.module.scss';

export function SignUpSection() {
  return (
    <section className={css.section}>
      <Container>
        <h2>Working with POST request</h2>
        <SignUpForm />
      </Container>
    </section>
  );
}
