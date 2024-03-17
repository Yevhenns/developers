import { SubmitHandler, useForm } from 'react-hook-form';
import { registerNewDeveloper } from '../../API/developers';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { RadioButtonsWrapper } from '../RadioButtonsWrapper';
import { RadioButtons } from '../../components/RadioButtons';
import css from './SignUpForm.module.scss';

export type SignUpFormProps = {
  positions: Positions;
  token: string;
};

export function SignUpForm({ positions, token }: SignUpFormProps) {
  const { register, handleSubmit, reset, watch } = useForm<NewDeveloper>({ mode: 'onChange' });

  const position = Number(watch('position_id'));

  const onSubmit: SubmitHandler<NewDeveloper> = data => {
    const formData: NewDeveloper = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      position_id: position,
      photo: data.photo,
    };
    registerNewDeveloper({ formData, token }).then(response => {
      return response?.status;
    });
    reset();
  };

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
          {...register('position_id')}
          positions={positions}
          name="position_id"
          currentPosition={position}
        />
      </RadioButtonsWrapper>
      <Input {...register('photo')} type="file" id="photo" htmlFor="photo" />
      <Button label="Sign up" type="submit" />
    </form>
  );
}
