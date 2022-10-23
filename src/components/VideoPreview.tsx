import React, { FC, VideoHTMLAttributes } from 'react';

const VideoPreview: FC<VideoHTMLAttributes<HTMLVideoElement>> = (props) => (
  <video controls width="100%" {...props} />
);

export default VideoPreview;
