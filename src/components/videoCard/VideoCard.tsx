import classNames from 'classnames';
import React, { FC } from 'react';

import downloadIcon from '../../assets/download.svg';
import editIcon from '../../assets/edit.svg';
import { VideoItemProps } from '../../redux/slices/videoListSlice';
import { exportJsonFile } from '../../utils';
import TimeIntervalsGrid from '../addOrEditItem/components/timeIntervals/components/timeIntervalsGrid/TimeIntervalsGrid';
import Button from '../button/Button';
import Heading from '../heading/Heading';
import TrashButton from '../trashButton/TrashButton';
import VideoPreview from '../VideoPreview';
import classes from './VideoCard.module.scss';

interface VideoCardProps {
  handleRemoveVideoCard: (id: string) => void;
  handleEditVideoCard: () => void;
}

const VideoCard: FC<VideoCardProps & VideoItemProps> = ({
  id,
  title,
  videoSrc,
  timeIntervals = [],
  description,
  handleRemoveVideoCard,
  handleEditVideoCard,
}) => {
  if (!id) return null;

  const isNotes = description || timeIntervals?.length > 0;

  const cardActions = (
    <div className={classes.actions}>
      <Button onClick={handleEditVideoCard} buttonType="Text" title="Edit card">
        <img src={editIcon} alt="edit" className={classes.editIcon} />
      </Button>

      <TrashButton
        onClick={() => handleRemoveVideoCard(id)}
        title="Delete card"
      />
    </div>
  );

  const exportBtn = (
    <Button
      onClick={() =>
        exportJsonFile({ timeIntervals, description }, `${title} - notes.json`)
      }
      buttonType="Text"
      title="Export notes"
    >
      <img src={downloadIcon} alt="download" />
    </Button>
  );

  return (
    <section className={classes.wrapper}>
      <Heading level="h4">
        {title} {cardActions}
      </Heading>

      <div className={classes.rowWrapper}>
        <VideoPreview
          src={videoSrc}
          className={classNames(classes.videoPreview, {
            [classes.fullWidth]: !isNotes,
          })}
        />

        {isNotes && (
          <div className={classes.columnWrapper}>
            <Heading level="h6">Notes: {exportBtn}</Heading>
            <TimeIntervalsGrid items={timeIntervals} />
            <p>{description}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoCard;
