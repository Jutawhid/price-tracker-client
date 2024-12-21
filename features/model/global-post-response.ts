import { AxiosError } from "axios";

export type TGlobalPostResponse = {
  code: string;
  success: boolean;
  message: string;
  data: null | [] | object;
};

export type TGlobalErrorResponse = {
  code: string;
  success: boolean;
  message: string;
  data: null | [] | object;
};

export type TAxiosError = AxiosError<TGlobalPostResponse>;
