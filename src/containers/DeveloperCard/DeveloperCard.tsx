import css from './DeveloperCard.module.scss';

type DeveloperCardProps = {
  developer: Developer;
};

export function DeveloperCard({ developer }: DeveloperCardProps) {
  const { photo, name, position, email, phone } = developer;
  return (
    <div className={css.card}>
      <img src={photo} width={70} height={70} />
      <p>{name}</p>
      <div>
        <p>{position}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    </div>
  );
}
