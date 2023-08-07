import './input.scss'
import React from 'react';

type InputProps = {
  label?: string,
  value?: string,
  id: string,
  name: string,
  type: string,
  placeholder?: string,
  required?: boolean,
  disabled?: boolean,
  onClickHandler?: (event: React.MouseEvent<HTMLInputElement>) => void,
  onChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onBlurHandler?: (event:  React.FocusEvent<HTMLInputElement>) => void,
}

function Input({id,name,type, placeholder, value, label, required, disabled, onClickHandler, onChangeHandler, onBlurHandler}: InputProps) {
  return (
      <>
        <label htmlFor={id}>
          {label}
        </label>
        <input type={type} name={name} id={id} placeholder={placeholder} value={value} required={required} onClick={onClickHandler} onChange={onChangeHandler} onBlur={onBlurHandler} disabled={disabled}/></>
  );
}

export default Input;
