import React, { FC } from 'react';

import { VideoItemProps } from '../../redux/slices/videoListSlice';
import Heading from '../heading/Heading';
import VideoPreview from '../VideoPreview';
import classes from './VideoCard.module.scss';

const VideoCard: FC<VideoItemProps> = ({
  id,
  title,
  videoSrc,
  timeIntervals,
  description,
}) => {
  if (!id) return null;

  return (
    <section className={classes.wrapper}>
      <Heading level="h3">{title}</Heading>

      <div className={classes.rowWrapper}>
        <VideoPreview src={videoSrc} />
        <div>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default VideoCard;
