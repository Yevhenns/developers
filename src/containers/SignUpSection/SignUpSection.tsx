import { useEffect, useState } from 'react';
import { getPositions } from '../../API/developers';
import { Container } from '../../components/Container';
import { SignUpForm } from '../SignUpForm';
import css from './SignUpSection.module.scss';

export function SignUpSection() {
  const [positions, setPositions] = useState<Positions | []>([]);

  useEffect(() => {
    getPositions().then(items => {
      setPositions(items);
    });
  }, []);

  return (
    <section className={css.section}>
      <Container>
        <h2>Working with POST request</h2>
        <SignUpForm positions={positions} />
      </Container>
    </section>
  );
}
