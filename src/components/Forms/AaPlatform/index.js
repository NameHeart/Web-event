import React from 'react';
import { AaPlatformStyled } from './styled';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Inputs } from '../../../components';

const AaPlatform = ({ onSubmit }) => {
  const schema = yup.object().shape({
    test: yup.string().required('New password is required'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <AaPlatformStyled>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          render={({ field }) => (
            <Inputs.TextField
              {...field}
              // placeholder={t('test')}
              // errors={errors.phone?.message}
            />
          )}
          name="test"
          defaultValue=""
        />
        <button type="submit">submit</button>
      </form>
    </AaPlatformStyled>
  );
};

AaPlatform.propTypes = {};

export default AaPlatform;
