import { FC, HTMLProps, forwardRef } from 'react';
import css from './RadioButtons.module.scss';

export type RadioButtonsProps = {
  positions: Positions;
  currentPosition: number;
} & HTMLProps<HTMLInputElement>;

export const RadioButtons: FC<RadioButtonsProps> = forwardRef(
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
                value={position.id}
                checked={currentPosition === position.id}
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
