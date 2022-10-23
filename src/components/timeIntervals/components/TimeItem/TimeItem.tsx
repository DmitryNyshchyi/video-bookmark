import React, { FC } from 'react';

import { TimeIntervalsProps } from '../../../../redux/slices/videoListSlice';
import Button from '../../../button/Button';
import classes from './TimeItem.module.scss';

interface TimeItemProps {
  handleRemoveTimeItem: (id: string) => void;
}

const TimeItem: FC<TimeItemProps & TimeIntervalsProps> = ({
  id,
  time,
  description,
  handleRemoveTimeItem,
}) => (
  <div className={classes.wrapper}>
    <b>{time}</b>
    &mdash;
    <span>{description}</span>
    <Button onClick={() => handleRemoveTimeItem(id)} buttonType="Text">
      &times;
    </Button>
  </div>
);

export default TimeItem;
