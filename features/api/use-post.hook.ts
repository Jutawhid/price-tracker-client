import { ServiceTypes } from "./constants";
import { RequestOptions, useMutation } from "./use-mutation.hook";

/**
 * Wrapper for POST request to the API.
 *
 * Provides way to mutate remote data by trigger function.
 *
 * @template RequestType - Type of the request payload
 * @template ResponseType - Type of the server response
 * @param url - API endpoint. i.e - /api/user/me
 * @param [options] - Options to pass to axios
 * @param [serviceName] - Optional service name to help categorize requests
 * @param [params] - Optional parameters to be serialized as query string
 */
export function usePost<
  RequestType = Record<string, unknown>,
  ResponseType = Record<string, unknown>,
>(
  url: string,
  options?: RequestOptions<RequestType>,
  params?: Record<string, unknown>,
) {
  // Helper function to serialize params to query string
  const serializeParams = (params: Record<string, unknown>) => {
    const query = new URLSearchParams();
    Object.keys(params).forEach((key) => {
      if (params[key] !== undefined && params[key] !== null) {
        query.append(key, String(params[key]));
      }
    });
    return query.toString();
  };

  // Append serialized params to the URL if provided
  const finalUrl = params ? `${url}?${serializeParams(params)}` : url;

  const ctx = useMutation<RequestType, ResponseType>(
    finalUrl,
    "POST",
    options,
  );

  return ctx;
}
