import { stringSlice } from '../../helpers/stringSlice';
import css from './DeveloperCard.module.scss';

type DeveloperCardProps = {
  developer: Developer;
};

export function DeveloperCard({ developer }: DeveloperCardProps) {
  const { photo, name, position, email, phone } = developer;

  const nameCheckedLength = stringSlice(name);
  const emailCheckedLength = stringSlice(email);

  return (
    <div className={css.card}>
      <img src={photo} width={70} height={70} alt="developer image" />
      <p>{nameCheckedLength}</p>
      <div>
        <p>{position}</p>
        <p>{emailCheckedLength}</p>
        <p>{phone}</p>
      </div>
    </div>
  );
}
