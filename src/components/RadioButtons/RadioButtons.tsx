import css from './RadioButtons.module.scss';

export function RadioButtons() {
  return (
    <div className={css.radioButtons}>
      <p>Select your position</p>
      <label>
        <input type="radio" value="option1" />
        Frontend developer
      </label>
      <label>
        <input type="radio" value="option2" />
        Backend developer
      </label>
      <label>
        <input type="radio" value="option3" />
        Designer
      </label>
      <label>
        <input type="radio" value="option4" />
        QA
      </label>
    </div>
  );
}
