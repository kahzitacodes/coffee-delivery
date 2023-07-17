import { forwardRef } from 'react';
import { InputContainer } from './styles';
import { InputProps } from './types';
import { Controller } from 'react-hook-form';

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {

  const { label, id, errorMsg, ...rest } = props;

  return (
    <InputContainer>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        defaultValue={''}
        placeholder={label}
        {...rest}
        ref={ref}
      />
      {errorMsg ? <span>{errorMsg}</span> : null}
    </InputContainer>
  );
});