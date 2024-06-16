import { useState } from 'react';
import { stringSlice } from '../../helpers/stringSlice';
import css from './DeveloperCard.module.scss';
import { createPortal } from 'react-dom';
import { DeveloperModal } from '../DeveloperModal';

type DeveloperCardProps = {
  developer: Developer;
};

export function DeveloperCard({ developer }: DeveloperCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { photo, name, position, email, phone } = developer;

  const nameCheckedLength = stringSlice(name);
  const emailCheckedLength = stringSlice(email);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen &&
        createPortal(
          <DeveloperModal key={developer.id} developer={developer} toggleModal={toggleModal} />,
          document.body
        )}
      <div className={css.card} onClick={toggleModal}>
        <img src={photo} width={70} height={70} alt="developer image" />
        <p>{nameCheckedLength}</p>
        <div>
          <p>{position}</p>
          <p>{emailCheckedLength}</p>
          <p>{phone}</p>
        </div>
      </div>
    </>
  );
}
