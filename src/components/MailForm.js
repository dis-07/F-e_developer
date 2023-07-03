import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import axios from '../helpers/axios';

import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const MailForm = ({ handleCloseForm }) => {
  const { handleSubmit, control, register } = useForm();
  const [status, setStatus] = useState('');

  const onSubmit = async (data) => {
    try {
      await axios.post('/contact-forms', data);
      // Обработка успешной отправки формы
      alert('Форма успешно отправлена');
      handleCloseForm();
    } catch (error) {
      console.error(error);
      // Обработка ошибки при отправке формы
      setStatus('Произошла ошибка при отправке сообщения.');
    }
    console.log(status);
  };

  return (
    <form
      className='form'
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        control={control}
        name='userName'
        defaultValue=''
        render={({ field, fieldState: { error } }) => {
          return (
            <TextField
              {...field}
              id='outlined-basic'
              label='Ваше імʼя'
              {...register('userName', { required: 'Required' })}
              variant='outlined'
              type='text'
              helperText={error?.message}
              sx={{ width: '300px', mb: 6 }}
            />
          );
        }}
      />
      <Controller
        control={control}
        name='email'
        defaultValue=''
        render={({ field, fieldState: { error } }) => {
          return (
            <TextField
              {...field}
              id='outlined-basic'
              label='Ваш email'
              {...register('email', {
                required: 'Required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email format',
                },
              })}
              variant='outlined'
              type='text'
              error={!!error?.message}
              helperText={error?.message}
              sx={{ width: '300px', mb: 6 }}
            />
          );
        }}
      />
      <Controller
        control={control}
        name='phone'
        defaultValue=''
        render={({ field, fieldState: { error } }) => {
          return (
            <TextField
              {...field}
              id='outlined-basic'
              label='Номер телефону'
              {...register('phone', { required: 'Required' })}
              variant='outlined'
              type='text'
              helperText={error?.message}
              sx={{ width: '300px', mb: 10 }}
            />
          );
        }}
      />
      <Button
        variant='contained'
        type='submit'
        sx={{ maxWidth: '100%' }}
      >
        Надіслати
      </Button>
    </form>
  );
};

export default MailForm;
