import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { RadioButtonsWrapper } from '../RadioButtonsWrapper';
import { RadioButtons } from '../../components/RadioButtons';
import css from './SignUpForm.module.scss';

export type SignUpFormProps = {
  positions: Positions;
  submitForm: (formData: NewDeveloper) => void;
};

export function SignUpForm({ positions, submitForm }: SignUpFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm<NewDeveloper>({ mode: 'onChange' });

  const position = Number(watch('position_id'));

  const onSubmit: SubmitHandler<NewDeveloper> = data => {
    const formData: NewDeveloper = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      position_id: position,
      photo: data.photo,
    };
    submitForm(formData);
    reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('name', {
          required: 'Name is required!',
          minLength: 2,
          maxLength: 60,
        })}
        placeholder="Your name"
        id="name"
        htmlFor="name"
        error={errors.name?.message}
      />
      <Input
        {...register('email', {
          required: 'Email is required!',
          minLength: 2,
          maxLength: 100,
        })}
        placeholder="Email"
        id="email"
        htmlFor="email"
        error={errors.email?.message}
      />
      <Input
        {...register('phone', {
          required: 'Phone number is required!',
        })}
        placeholder="Phone"
        id="phone"
        htmlFor="phone"
        label="+38 (XXX) XXX - XX - XX"
        error={errors.phone?.message}
      />
      <RadioButtonsWrapper>
        <RadioButtons
          {...register('position_id', {
            required: 'Position is required!',
          })}
          positions={positions}
          name="position_id"
          currentPosition={position}
          error={errors.position_id?.message}
        />
      </RadioButtonsWrapper>
      <Input
        {...register('photo', {
          required: 'Photo is required',
        })}
        type="file"
        id="photo"
        htmlFor="photo"
        error={errors.photo?.message?.toString()}
      />
      <Button label="Sign up" type="submit" disabled={!isValid} />
    </form>
  );
}
