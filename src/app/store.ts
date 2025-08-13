import { combineSlices, configureStore } from '@reduxjs/toolkit';

import { newsSlice } from '../features/news/newsApiSlice';

const rootReducer = combineSlices(newsSlice);

export const store = configureStore({
  reducer: rootReducer,
});

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<typeof rootReducer>;
