import { AxiosError, AxiosRequestConfig } from "axios";
import { useSession } from "next-auth/react";
import useSWRMutation from "swr/mutation";
import * as clientList from "./client";
import { ServiceTypes } from "./constants";
import { InferErrorType } from "./infer-error.type";

/**
 * Wrapper for lazy GET request to the API.
 * Collected from - https://github.com/vercel/swr/issues/176
 *
 * @param url - API endpoint. i.e - /api/user/me
 * @param params - Optional search queries.
 * @param [options] - Options to pass to axios
 * @param servicename
 */
export function useLazyGet<T = Record<string, unknown>>(
  url: string,
  params?: AxiosRequestConfig["params"],
  servicename?: ServiceTypes,
  options?: Record<string, unknown>
) {
  const { data } = useSession();
  const access_token = data?.access_token;
  const ctx = useSWRMutation(
    url,
    async (url) => {
      if (servicename && Object.keys(clientList).includes(servicename)) {
        const additionalHeaders: Record<string, unknown> = {};
        if (servicename === "AuthApiClient") {
          additionalHeaders["service_Secret"] =
            process.env.NEXT_PUBLIC_AUTH_SERVICE_SECRET;
        } else {
          additionalHeaders["service_code"] = "sl_admin";
        }

        let r = await clientList[servicename].request({
          url,
          params,
          ...(access_token && {
            headers: {
              Authorization: `Bearer ${access_token}`,
              ...additionalHeaders,
            },
          }),
          ...options,
        });
        return r.data as T;
      }

      let r1 = await clientList.ApiClient.request({
        url,
        params,
        ...(access_token && {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }),
        ...options,
      });
      return r1.data as T;
    },
    { throwOnError: false }
  );

  const { error, isMutating, ...rest } = ctx;

  // collect error message from server response
  const errorData = (error as AxiosError)?.response?.data as
    | Omit<InferErrorType<never>, "validationErrors">
    | undefined;

  return {
    ...rest,
    isLoading: isMutating,
    error: errorData,
  };
}
