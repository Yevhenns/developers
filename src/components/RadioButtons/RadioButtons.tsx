import { FC, HTMLProps, forwardRef } from 'react';
import css from './RadioButtons.module.scss';

export type RadioButtonsProps = {
  positions: Positions;
  currentPosition: number;
  error?: string;
} & HTMLProps<HTMLInputElement>;

export const RadioButtons: FC<RadioButtonsProps> = forwardRef(
  ({ positions, currentPosition, error, ...props }, ref) => {
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
        {error && <span className={css.errorMessage}>{error}</span>}
      </div>
    );
  }
);
