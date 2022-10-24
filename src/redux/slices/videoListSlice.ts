import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

import { AppState } from '../store';

export interface TimeIntervalsProps {
  id: string;
  time: string;
  description: string;
}

export interface VideoItemProps {
  id?: string;
  title: string;
  videoSrc: string;
  timeIntervals?: TimeIntervalsProps[];
  description?: string;
}

export interface VideoListState {
  videoList: VideoItemProps[];
  editVideoItem: VideoItemProps | null;
}

const initialState: VideoListState = {
  videoList: [
    {
      id: nanoid(),
      title: 'Big Buck Bunny',
      videoSrc:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      timeIntervals: [
        {
          id: nanoid(),
          time: '01:32',
          description: 'Big Buck Bunny tells the story',
        },
        {
          id: nanoid(),
          time: '03:30',
          description:
            'Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself',
        },
      ],
      description:
        'Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps...',
    },
    {
      id: nanoid(),
      title: 'For Bigger Blazes',
      videoSrc:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      timeIntervals: [
        {
          id: nanoid(),
          time: '00:40',
          description: 'The first Blender Open Movie from 2006',
        },
        {
          id: nanoid(),
          time: '00:57',
          description: 'The first Blender Open Movie from 2006',
        },
      ],
    },
    {
      id: nanoid(),
      title: 'Sintel. By Blender Foundation',
      videoSrc:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
      timeIntervals: [
        {
          id: nanoid(),
          time: '01:10',
          description: 'Sintel is an independently produced short film',
        },
      ],
      description:
        'Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps...',
    },
  ],
  editVideoItem: null,
};

export const videoListSlice = createSlice({
  name: 'videoList',
  initialState,
  reducers: {
    addItem(state, action) {
      state.videoList = [
        ...state.videoList,
        { id: nanoid(), ...action.payload },
      ];
    },
    updateItem(state, action) {
      const index = state.videoList.findIndex(
        ({ id }) => id === action.payload.id,
      );

      state.videoList[index] = action.payload;
    },
    removeItemById(state, action) {
      state.videoList = state.videoList.filter(
        ({ id }) => id !== action.payload,
      );
    },
    setItemForEditing(state, action) {
      state.editVideoItem = action.payload;
    },
    clearItemForEditing(state) {
      state.editVideoItem = null;
    },
  },
});

export const {
  addItem,
  updateItem,
  removeItemById,
  setItemForEditing,
  clearItemForEditing,
} = videoListSlice.actions;

export const videoListState = (state: AppState) => state.videoList;
