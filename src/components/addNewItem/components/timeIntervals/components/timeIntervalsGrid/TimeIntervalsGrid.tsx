import React, { FC } from 'react';

import { TimeIntervalsProps } from '../../../../../../redux/slices/videoListSlice';
import TimeItem from '../TimeItem/TimeItem';

interface TimeIntervalsGridProps {
  items: TimeIntervalsProps[];
  handleRemoveTimeItem?: (id: string) => void;
}

const TimeIntervalsGrid: FC<TimeIntervalsGridProps> = ({
  items = [],
  handleRemoveTimeItem,
}) => {
  if (items.length < 1) return null;

  return (
    <div>
      {items.map((item: TimeIntervalsProps) => (
        <TimeItem key={item.id} {...{ ...item, handleRemoveTimeItem }} />
      ))}
    </div>
  );
};

export default TimeIntervalsGrid;
