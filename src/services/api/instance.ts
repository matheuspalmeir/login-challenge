import axios, {AxiosRequestConfig, AxiosInstance} from 'axios';
import {config} from './config';

const optionsApi : AxiosRequestConfig = {
    baseURL: config.baseUrl,
    responseType: 'json',
};

console.log("Options API:", optionsApi);

const api : AxiosInstance = axios.create(optionsApi);

api.interceptors.request.use(async (config : AxiosRequestConfig) => {
    const token : string = localStorage.getItem('Token');

    if (token) config.headers.Authorization = token;
    return config;
});

export default api;