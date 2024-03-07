import { DeveloperCard } from '../DeveloperCard';
import css from './DevelopersList.module.scss';

export type DevelopersListProps = {
  developers: Developers;
};

export function DevelopersList({ developers }: DevelopersListProps) {
  return (
    <div className={css.list}>
      {developers.map(developer => {
        return <DeveloperCard key={developer.id} developer={developer} />;
      })}
    </div>
  );
}
