import { configureStore } from '@reduxjs/toolkit';

import { layoutSlice } from './slices/layoutSlice';
import { videoListSlice } from './slices/videoListSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      [layoutSlice.name]: layoutSlice.reducer,
      [videoListSlice.name]: videoListSlice.reducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
  });

export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
