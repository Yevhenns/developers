import { ReactNode } from 'react';
import css from './Container.module.scss';

export type ContainerProps = {
  children: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return <div className={css.container}>{children}</div>;
}
