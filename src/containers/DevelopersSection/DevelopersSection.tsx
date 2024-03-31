import { RefObject } from 'react';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { DevelopersList } from '../DevelopersList';
import css from './DevelopersSection.module.scss';
import { useGetDevelopers } from '../../hooks/useGetDevelopers';

type DevelopersSectionProps = {
  developersRef: RefObject<HTMLDivElement>;
};

export function DevelopersSection({ developersRef }: DevelopersSectionProps) {
  const { developers, page, showMore, totalPages } = useGetDevelopers();

  return (
    <section className={css.section} ref={developersRef}>
      <Container>
        <h2>Working with GET request</h2>
        <DevelopersList developers={developers} />
        {totalPages !== page && <Button label="Show more" onClick={showMore} />}
      </Container>
    </section>
  );
}
