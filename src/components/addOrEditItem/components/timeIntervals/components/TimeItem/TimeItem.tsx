import React, { FC } from 'react';

import { TimeIntervalsProps } from '../../../../../../redux/slices/videoListSlice';
import TrashButton from '../../../../../trashButton/TrashButton';
import classes from './TimeItem.module.scss';

interface TimeItemProps {
  handleRemoveTimeItem?: (id: string) => void;
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
    {handleRemoveTimeItem && id && (
      <TrashButton onClick={() => handleRemoveTimeItem(id)} iconSize="Small" />
    )}
  </div>
);

export default TimeItem;
