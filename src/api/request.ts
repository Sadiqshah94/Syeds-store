import { AxiosRequestConfig } from 'axios';
import apiInstance from './axios';
import { ApiRequestConfig, ApiResponse, ApiResponseType } from './types';


 const getReq = async <T>(url: string, config?: ApiRequestConfig): Promise<ApiResponse<T>> => {
  const response: ApiResponseType<T> = await apiInstance.get(url, config);
  return { data: response.data, status: response.status };
};

 const postReq = async <T>(
  url: string,
  data?: Record<string, unknown>,
): Promise<ApiResponse<T>> => {
  const response: ApiResponseType<T> = await apiInstance.post(url, data);
  return { data: response.data, status: response.status };
};

 const putReq = async <T>(
  url: string,
  data?: Record<string, unknown>,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> => {
  const response: ApiResponseType<T> = await apiInstance.put(url, data, config);
  return { data: response.data, status: response.status };
};

 const deleteReq = async <T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
  const response: ApiResponseType<T> = await apiInstance.delete(url, config);
  return { data: response.data, status: response.status };
};



export  {getReq,postReq,putReq,deleteReq};