import classNames from 'classnames';
import React, { FC } from 'react';

import downloadIcon from '../../assets/download.svg';
import trashIcon from '../../assets/trash.svg';
import { VideoItemProps } from '../../redux/slices/videoListSlice';
import { exportJsonFile } from '../../utils';
import TimeIntervalsGrid from '../addNewItem/components/timeIntervals/components/timeIntervalsGrid/TimeIntervalsGrid';
import Button from '../button/Button';
import Heading from '../heading/Heading';
import VideoPreview from '../VideoPreview';
import classes from './VideoCard.module.scss';

interface VideoCardProps {
  handleRemoveVideoCard: (id: string) => void;
}

const VideoCard: FC<VideoCardProps & VideoItemProps> = ({
  id,
  title,
  videoSrc,
  timeIntervals = [],
  description,
  handleRemoveVideoCard,
}) => {
  if (!id) return null;

  const isNotes = description || timeIntervals?.length > 0;

  const cardActions = (
    <div>
      <Button onClick={() => handleRemoveVideoCard(id)} buttonType="Text">
        <img src={trashIcon} alt="trash" />
      </Button>
    </div>
  );

  const exportBtn = (
    <Button
      onClick={() =>
        exportJsonFile({ timeIntervals, description }, `${title} - notes.json`)
      }
      buttonType="Text"
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
