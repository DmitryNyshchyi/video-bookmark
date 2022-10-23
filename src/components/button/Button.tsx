import classNames from 'classnames';
import React, { ButtonHTMLAttributes, FC } from 'react';

import classes from './Button.module.scss';

interface ButtonProps {
  buttonType?: 'PrimaryReverse' | 'Primary' | 'Text';
  isMobileFullWidth?: boolean;
  size?: 'Small' | 'Middle';
}

const Button: FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  buttonType = 'Primary',
  isMobileFullWidth,
  size = 'Middle',
  ...props
}) => (
  <button
    {...props}
    className={classNames(classes.button, {
      [classes.primary]: buttonType === 'Primary',
      [classes.text]: buttonType === 'Text',
      [classes.isMobileFullWidth]: isMobileFullWidth,
      [classes.isMobileFullWidth]: isMobileFullWidth,
      [classes.small]: size === 'Small',
      [classes.middle]: size === 'Middle',
    })}
  >
    {children}
  </button>
);

export default Button;
