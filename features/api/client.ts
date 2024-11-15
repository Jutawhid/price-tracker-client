import axios from "axios";

export const ApiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const AuthApiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const MediaCenterApiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const ChatApiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});


