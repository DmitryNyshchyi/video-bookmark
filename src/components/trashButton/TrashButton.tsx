import classNames from 'classnames';
import React, { FC } from 'react';

import trashIcon from '../../assets/trash.svg';
import Button, { ButtonProps } from '../button/Button';
import classes from './TrashButton.module.scss';

interface TrashButtonProps {
  iconSize?: 'Small' | 'Middle';
}

const TrashButton: FC<TrashButtonProps & Partial<ButtonProps>> = ({
  iconSize = 'Middle',
  ...props
}) => (
  <Button buttonType="Text" {...props}>
    <img
      src={trashIcon}
      alt="trash"
      className={classNames(classes.icon, {
        [classes.small]: iconSize === 'Small',
      })}
    />
  </Button>
);

export default TrashButton;
