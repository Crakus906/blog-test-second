import React from 'react';
import { useField } from 'formik';
import cn from 'classnames';
import { Input as InputAntd } from 'antd';

import './style.scss'

export default function Input(props) {
  const {
    disabled,
    type,
    className,
    name,
    label,
  } = props;

  const [field, meta] = useField(name)

  return (
    <div className="input-wrapper ">
      <div className="label">{label}</div>
      <InputAntd
        {...field}
        className={cn(`input ${meta.error ? 'input__error' : null}`,className)}
        type={type}
        disabled={disabled}
        name={field.name}
      />
      <div className="error">{meta && meta.error}</div>
    </div>
  );
}
