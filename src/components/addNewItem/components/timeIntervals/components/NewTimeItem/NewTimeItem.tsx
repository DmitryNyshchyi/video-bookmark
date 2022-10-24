import { nanoid } from 'nanoid';
import React, { FC, useState } from 'react';

import { TimeIntervalsProps } from '../../../../../../redux/slices/videoListSlice';
import Button from '../../../../../button/Button';
import classes from './NewTimeItem.module.scss';

interface NewTimeItemProps {
  addTimeItem: (item: TimeIntervalsProps) => void;
}

const NewTimeItem: FC<NewTimeItemProps> = ({ addTimeItem }) => {
  const [time, setTime] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  return (
    <div className={classes.wrapper}>
      <input
        className={classes.time}
        type="text"
        value={time}
        onChange={({ target }) => setTime(target.value)}
        placeholder="00:00"
      />

      <input
        className={classes.description}
        type="text"
        value={description}
        onChange={({ target }) => setDescription(target.value)}
        placeholder="Enter description"
      />

      <Button
        onClick={() => {
          addTimeItem({ id: nanoid(), time, description });
          setTime('');
          setDescription('');
        }}
        size="Small"
      >
        Add
      </Button>
    </div>
  );
};

export default NewTimeItem;
