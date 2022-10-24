import React from 'react';

import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { openSidebar } from '../redux/slices/layoutSlice';
import {
  removeItemById,
  setItemForEditing,
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

  const handleEditVideoCard = (item: VideoItemProps) => {
    dispatch(setItemForEditing(item));
    dispatch(openSidebar());
  };

  return (
    <CustomGrid<VideoItemProps>
      content={videoList}
      render={(items) =>
        items?.map((item) => (
          <VideoCard
            key={item?.id}
            handleRemoveVideoCard={handleRemoveVideoCard}
            handleEditVideoCard={() => handleEditVideoCard(item)}
            {...item}
          />
        ))
      }
    />
  );
};

export default VideoListGrid;
