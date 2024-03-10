import { Button } from '../../components/Button';
import css from './HeroSection.module.scss';

export function HeroSection() {
  return (
    <section className={css.hero}>
      <div className={css.wrapper}>
        <h1>Test assignment for front-end developer</h1>
        <p>
          What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS
          with a vast understanding of User design thinking as they'll be building web interfaces
          with accessibility in mind. They should also be excited to learn, as the world of
          Front-End Development keeps evolving.
        </p>
        <Button label="Sign up" onClick={() => console.log('Sign up')} />
      </div>
    </section>
  );
}
