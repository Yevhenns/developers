import { FC, HTMLProps, PropsWithRef, forwardRef } from 'react';
import css from './RadioButtons.module.scss';

export type RadioButtonsProps = {
  positions: Positions;
  currentPosition: string;
} & HTMLProps<HTMLInputElement>;

export const RadioButtons: FC<PropsWithRef<RadioButtonsProps>> = forwardRef(
  ({ positions, currentPosition, ...props }, ref) => {
    return (
      <div className={css.radioButtons}>
        {positions.map(position => {
          return (
            <label key={position.id} htmlFor={position.name}>
              <input
                name={props.name}
                id={position.name}
                type="radio"
                value={position.name}
                checked={currentPosition === position.name}
                {...props}
                ref={ref}
              />
              {position.name}
            </label>
          );
        })}
      </div>
    );
  }
);
