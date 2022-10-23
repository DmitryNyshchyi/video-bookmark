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
}

const initialState: VideoListState = {
  videoList: [],
};

export const videoListSlice = createSlice({
  name: 'videoList',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = {
        id: nanoid(),
        ...action.payload,
      };

      state.videoList = [...state.videoList, newItem];
    },
    updateItem(state, action) {
      const index = state.videoList.findIndex(
        (item) => item === action.payload.id,
      );

      state.videoList[index] = action.payload;
    },
    removeItemById(state, action) {
      state.videoList = state.videoList.filter(
        (item) => item !== action.payload,
      );
    },
  },
});

export const { addItem, updateItem, removeItemById } = videoListSlice.actions;

export const videoListState = (state: AppState) => state.videoList;
