import { RefObject, useEffect, useState } from 'react';
import { getPositions, getToken, registerNewDeveloper } from '../../API/developers';
import { Container } from '../../components/Container';
import { SignUpForm } from '../SignUpForm';
import { Success } from '../../components/Success';
import css from './SignUpSection.module.scss';
import { useDevelopersStore } from '../../zustand/store';

type SignUpSectionProps = {
  signUpRef: RefObject<HTMLDivElement>;
};

export function SignUpSection({ signUpRef }: SignUpSectionProps) {
  const [positions, setPositions] = useState<Positions | []>([]);

  const token = useDevelopersStore(state => state.token);
  const resStatus = useDevelopersStore(stete => stete.resStatus);
  const setToken = useDevelopersStore(state => state.updateToken);
  const setResStatus = useDevelopersStore(state => state.updateresStatus);

  const submitForm = (formData: NewDeveloper) => {
    registerNewDeveloper({ formData, token }).then(response => {
      if (response) setResStatus(response?.status);
    });
  };

  useEffect(() => {
    getPositions().then(items => {
      if (items !== undefined) {
        setPositions(items);
      }
    });
  }, []);

  useEffect(() => {
    getToken().then(token => {
      if (token !== undefined) {
        setToken(token.token);
      }
    });
  }, [setToken]);

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
