import { Button } from '../../components/Button';
import css from './DeveloperModal.module.scss';

type DeveloperCardProps = {
  developer: Developer;
  toggleModal: () => void;
};

export function DeveloperModal({ developer, toggleModal }: DeveloperCardProps) {
  const { photo, name, position, email, phone } = developer;

  return (
    <div className={css.layout}>
      <div className={css.modal}>
        <img src={photo} width={100} height={100} alt="developer image" />
        <p>{name}</p>
        <div>
          <p>{position}</p>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
        <Button label="X" onClick={toggleModal} />
      </div>
    </div>
  );
}
