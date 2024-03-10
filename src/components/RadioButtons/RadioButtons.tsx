import css from './RadioButtons.module.scss';

export type RadioButtonsProps = {
  positions: Positions;
};

export function RadioButtons({ positions }: RadioButtonsProps) {
  return (
    <div className={css.radioButtons}>
      <p>Select your position</p>
      {positions.map(position => {
        return (
          <label key={position.id}>
            <input type="radio" value={position.name} id={position.name} />
            {position.name}
          </label>
        );
      })}
    </div>
  );
}
