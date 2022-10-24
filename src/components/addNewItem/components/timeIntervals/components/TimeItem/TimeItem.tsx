import React, { FC } from 'react';

import trashIcon from '../../../../../../assets/trash.svg';
import { TimeIntervalsProps } from '../../../../../../redux/slices/videoListSlice';
import Button from '../../../../../button/Button';
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
      <Button onClick={() => handleRemoveTimeItem(id)} buttonType="Text">
        <img src={trashIcon} alt="trash" />
      </Button>
    )}
  </div>
);

export default TimeItem;
