import { ResponseNews, ResponseSource } from './interfaces';

export type CallbackVoid<T> = (data?: T) => void;

export type FetchData = ResponseNews | ResponseSource;
