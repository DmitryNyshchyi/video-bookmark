import { useField } from 'formik';
import React, { FC, InputHTMLAttributes } from 'react';

import classes from './Input.module.scss';
import { onBlurFn } from './Input.utils';

export interface InputProps {
  name: string;
  isTrim?: boolean;
  label?: string;
}

const Input: FC<InputProps & InputHTMLAttributes<HTMLInputElement>> = ({
  label,
  type = 'text',
  isTrim = true,
  name,
  ...props
}) => {
  const [field, { error, touched }] = useField(name);

  return (
    <div className={classes.wrapper}>
      {label && <label>{label}</label>}
      <input
        type={type}
        {...props}
        {...field}
        onBlur={onBlurFn(field, isTrim)}
      />
      <div className={classes.error}>{error && touched && error}</div>
    </div>
  );
};
export default Input;
