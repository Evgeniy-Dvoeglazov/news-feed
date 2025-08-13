import axios from 'axios';

export interface IFetchParams {
  limit: number;
  skip: number;
}

const BASE_URL = 'https://dummyjson.com';

export function fetchNews(params: IFetchParams) {
  return axios.get(`${BASE_URL}/posts`, { params });
}
