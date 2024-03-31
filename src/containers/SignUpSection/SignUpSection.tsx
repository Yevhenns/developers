import { RefObject, useEffect, useState } from 'react';
import { getPositions, getToken, registerNewDeveloper } from '../../API/developers';
import { Container } from '../../components/Container';
import { SignUpForm } from '../SignUpForm';
import { Success } from '../../components/Success';
import css from './SignUpSection.module.scss';

type SignUpSectionProps = {
  signUpRef: RefObject<HTMLDivElement>;
};

export function SignUpSection({ signUpRef }: SignUpSectionProps) {
  const [positions, setPositions] = useState<Positions | []>([]);
  const [token, setToken] = useState('');
  const [resStatus, setResStatus] = useState<null | number>(null);

  const submitForm = (formData: NewDeveloper) => {
    registerNewDeveloper({ formData, token }).then(response => {
      if (response) setResStatus(response?.status);
    });
  };

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
    <section className={css.section} ref={signUpRef}>
      <Container>
        <h2>Working with POST request</h2>
        <SignUpForm positions={positions} submitForm={submitForm} />
        {resStatus === 201 && <Success />}
      </Container>
    </section>
  );
}
