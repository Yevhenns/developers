import { useEffect, useState } from 'react';
import { getPositions, getToken } from '../../API/developers';
import { Container } from '../../components/Container';
import { SignUpForm } from '../SignUpForm';
import css from './SignUpSection.module.scss';

export function SignUpSection() {
  const [positions, setPositions] = useState<Positions | []>([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    getPositions().then(items => {
      if (items !== undefined) setPositions(items);
    });
  }, []);

  useEffect(() => {
    getToken().then(token => {
      if (token !== undefined) setToken(token.token);
    });
  }, []);

  return (
    <section className={css.section} id="signup">
      <Container>
        <h2>Working with POST request</h2>
        <SignUpForm positions={positions} token={token} />
      </Container>
    </section>
  );
}
