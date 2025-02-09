import { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface ApiResponse<T> {
  data: T;
  status: number;
}

export type ApiRequestConfig = AxiosRequestConfig;
export type ApiResponseType<T> = AxiosResponse<T>;