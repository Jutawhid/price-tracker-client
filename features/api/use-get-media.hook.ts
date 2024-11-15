
import { AxiosError, AxiosRequestConfig } from "axios";
import useSWR, { SWRConfiguration } from "swr";
import * as clientList from "./client";
import { useSession } from "next-auth/react";
import { InferErrorType } from "./infer-error.type";
import { ServiceTypes } from "./constants";
import process from "process";

/**
 * Wrapper for GET request to the API
 *
 * @param url - API endpoint. i.e - /api/user/me
 * @param params - Optional search queries.
 * @param options - SWR options
 * @param servicename
 */
export function useGetMedia<ResponseType = Record<string, unknown>>(
  url: string,
  params?: AxiosRequestConfig["params"],
  options?: SWRConfiguration<ResponseType>,
  servicename?: ServiceTypes
) {
  const { data } = useSession();
  const access_token = data?.access_token;
  const ctx = useSWR(
    url,
    async (url) => {
      if (servicename && Object.keys(clientList).includes(servicename)) {
        let r = await clientList[servicename].request({
          url,
          params,
          ...(access_token && {
            headers: {
              Authorization: `Bearer ${access_token}`,
              // service_Secret: servicename === 'AuthApiClient' ? process.env.NEXT_PUBLIC_AUTH_SERVICE_SECRET : undefined
              Service_code: "sl_admin"
            }
          })
        });
        return r.data as ResponseType;
      }

      let r1 = await clientList.ApiClient.request({
        url,
        params,
        ...(access_token && {
          headers: {
            Authorization: `Bearer ${access_token}`
          }
        })
      });
      return r1.data as ResponseType;

    },
    options
  );

  const { error, ...rest } = ctx;

  // collect error message from server response
  const errorData = (error as AxiosError)?.response?.data as
    | Omit<InferErrorType<never>, "validationErrors">
    | undefined;

  return {
    ...rest,
    error: errorData,
  };
}
