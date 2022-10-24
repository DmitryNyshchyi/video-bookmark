import React from 'react';

import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import {
  removeItemById,
  VideoItemProps,
  videoListState,
} from '../redux/slices/videoListSlice';
import CustomGrid from './customGrid/CustomGrid';
import VideoCard from './videoCard/VideoCard';

const VideoListGrid = () => {
  const { videoList } = useAppSelector(videoListState);
  const dispatch = useAppDispatch();

  const handleRemoveVideoCard = (id: string) => {
    dispatch(removeItemById(id));
  };

  return (
    <CustomGrid<VideoItemProps>
      content={videoList}
      render={(items) =>
        items?.map((item) => (
          <VideoCard
            key={item?.id}
            handleRemoveVideoCard={handleRemoveVideoCard}
            {...item}
          />
        ))
      }
    />
  );
};

export default VideoListGrid;
