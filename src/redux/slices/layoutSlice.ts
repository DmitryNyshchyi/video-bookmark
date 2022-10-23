import { createSlice } from '@reduxjs/toolkit';

import { AppState } from '../store';

export interface LayoutState {
  isSidebarOpen: boolean;
}

const initialState: LayoutState = {
  isSidebarOpen: false,
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    openSidebar(state) {
      state.isSidebarOpen = true;
    },
    closeSidebar(state) {
      state.isSidebarOpen = false;
    },
  },
});

export const { openSidebar, closeSidebar } = layoutSlice.actions;

export const layoutState = (state: AppState) => state.layout;
