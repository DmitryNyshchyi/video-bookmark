import React from 'react';

import { useAppSelector } from '../hooks/useAppSelector';
import { VideoItemProps, videoListState } from '../redux/slices/videoListSlice';
import CustomGrid from './customGrid/CustomGrid';
import VideoCard from './videoCard/VideoCard';

const VideoListGrid = () => {
  const { videoList } = useAppSelector(videoListState);

  return (
    <CustomGrid<VideoItemProps>
      content={videoList}
      render={(items) =>
        items?.map((item) => <VideoCard key={item?.id} {...item} />)
      }
    />
  );
};

export default VideoListGrid;
