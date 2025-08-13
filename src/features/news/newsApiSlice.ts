import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { INewsPost } from '../../utils/types';

import type { RootState } from '../../app/store';
import type { IFetchParams } from './newsApi';
import { fetchNews } from './newsApi';

interface IFetchData {
  posts: INewsPost[];
  total: number;
}

interface INewsState {
  news: INewsPost[];
  loading: boolean;
  newsTotal: number;
  error?: string;
}

const initialState: INewsState = {
  news: [],
  loading: false,
  newsTotal: 0,
};

export const getNews = createAsyncThunk('news/getNews', async (params: IFetchParams) => {
  const res = await fetchNews(params);
  return res.data as IFetchData;
});

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getNews.pending, state => {
        state.loading = true;
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.loading = false;
        state.news = [...state.news, ...action.payload.posts];
        state.newsTotal = action.payload.total;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const newsSelector = (state: RootState) => state.news;
