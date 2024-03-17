import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { RadioButtonsWrapper } from '../RadioButtonsWrapper';
import css from './SignUpForm.module.scss';
import { RadioButtons } from '../../components/RadioButtons';

export type SignUpFormProps = {
  positions: Positions;
};

export function SignUpForm({ positions }: SignUpFormProps) {
  const { register, handleSubmit, watch } = useForm<NewDeveloper>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<NewDeveloper> = data => {
    const sendForm = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      position: position,
      photo: data.photo,
    };
    console.log(sendForm);
    // reset();
  };

  const position = watch('position');

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('name')} placeholder="Your name" id="name" htmlFor="name" />
      <Input {...register('email')} placeholder="Email" id="email" htmlFor="email" />
      <Input
        {...register('phone')}
        placeholder="Phone"
        id="phone"
        htmlFor="phone"
        label="+38 (XXX) XXX - XX - XX"
      />
      <RadioButtonsWrapper>
        <RadioButtons
          {...register('position')}
          positions={positions}
          name="position"
          currentPosition={position}
        />
      </RadioButtonsWrapper>
      <Input {...register('photo')} type="file" id="photo" htmlFor="photo" />
      <Button label="Sign up" type="submit" />
    </form>
  );
}
