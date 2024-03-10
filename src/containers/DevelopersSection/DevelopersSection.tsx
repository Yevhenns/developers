import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { DevelopersList } from '../DevelopersList';
import { getDevelopers } from '../../API/developers';
import css from './DevelopersSection.module.scss';

export function DevelopersSection() {
  const [developers, setDevelopers] = useState<Developers | []>([]);
  const [totalPages, setTotalPages] = useState<null | number>(null);
  const [page, setPage] = useState(1);

  const showMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    getDevelopers({ page }).then(items => {
      if (items !== undefined) {
        setDevelopers(items.users);
        setTotalPages(items.total_pages);
      }
    });
  }, [page]);

  return (
    <section className={css.section}>
      <Container>
        <h2>Working with GET request</h2>
        <DevelopersList developers={developers} />
        {totalPages !== page && <Button label="Show more" onClick={showMore} />}
      </Container>
    </section>
  );
}
