import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { DevelopersList } from '../DevelopersList';
import { getDevelopers } from '../../API/developers';
import css from './DevelopersSection.module.scss';

export function DevelopersSection() {
  const [developers, setDevelopers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getDevelopers({ page }).then(items => {
      setDevelopers(items);
    });
  }, [page]);

  const showMore = () => {
    setPage(page + 1);
  };

  return (
    <section className={css.section}>
      <Container>
        <h2>Working with GET request</h2>
        <DevelopersList developers={developers} />
        {developers.length === 6 && <Button label="Show more" onClick={showMore} />}
      </Container>
    </section>
  );
}
