import { useField } from 'formik';
import React, { FC } from 'react';

import { TimeIntervalsProps } from '../../../../redux/slices/videoListSlice';
import NewTimeItem from './components/NewTimeItem/NewTimeItem';
import TimeIntervalsGrid from './components/timeIntervalsGrid/TimeIntervalsGrid';
import classes from './TimeIntervals.module.scss';

interface TimeIntervalProps {
  name: string;
  label?: string;
}

const TimeIntervals: FC<TimeIntervalProps> = ({ name, label }) => {
  const [, { error, touched, value: items }, { setValue }] = useField(name);

  const handleAddTimeItem = (item: TimeIntervalsProps) => {
    setValue([...items, item]);
  };

  const handleRemoveTimeItem = (id: string) => {
    setValue(items.filter((item: TimeIntervalsProps) => item.id !== id));
  };

  return (
    <div className={classes.wrapper}>
      {label && <div className={classes.label}>{label}</div>}

      <TimeIntervalsGrid
        items={items}
        handleRemoveTimeItem={handleRemoveTimeItem}
      />

      <NewTimeItem addTimeItem={handleAddTimeItem} />

      <div className={classes.error}>{error && touched && error}</div>
    </div>
  );
};

export default TimeIntervals;
