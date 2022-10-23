import { useField } from 'formik';
import React, { FC, TextareaHTMLAttributes } from 'react';

import { InputProps } from './input/Input';
import classes from './input/Input.module.scss';

const Textarea: FC<
  InputProps & TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({ label, rows = 4, name, ...props }) => {
  const [field, { error, touched }] = useField(name);

  return (
    <div className={classes.wrapper}>
      {label && <label>{label}</label>}
      <textarea rows={rows} {...props} {...field} />
      <div className={classes.error}>{error && touched && error}</div>
    </div>
  );
};

export default Textarea;
