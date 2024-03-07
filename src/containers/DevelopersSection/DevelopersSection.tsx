import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { DevelopersList } from '../DevelopersList';
import css from './DevelopersSection.module.scss';
import { getDevelopers } from '../../API/developers';

export function DevelopersSection() {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    getDevelopers().then(items => {
      setDevelopers(items);
    });
  }, []);

  return (
    <section className={css.section}>
      <Container>
        <h2>Working with GET request</h2>
        <DevelopersList developers={developers} />
        <Button label="Show more" />
      </Container>
    </section>
  );
}
