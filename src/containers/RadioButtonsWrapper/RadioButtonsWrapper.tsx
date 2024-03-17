import { FC, ReactNode } from 'react';
import css from './RadioButtonsWrapper.module.scss';

export type RadioButtonsProps = {
  children: ReactNode;
};

export const RadioButtonsWrapper: FC<RadioButtonsProps> = ({ children }) => {
  return (
    <div className={css.wrapper}>
      <p>Select your position</p>
      {children}
    </div>
  );
};
