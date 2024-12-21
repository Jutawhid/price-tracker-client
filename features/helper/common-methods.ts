import { lowerCase, toLower } from "lodash";
import { toast } from "sonner";
import { ReviewType } from "./review-types";

export function axiosErrorToast(error: string) {
  toast.error(error);
}

export const numberWithCommas = (value: number) => {
  let result = String(value);
  const pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(result)) result = result.replace(pattern, "$1,$2");
  return result;
};

const numberWithComma = (value: string) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const numberWithCommasAndDecimals = (
  value: number,
  decimalPlaces: number,
) => {
  return numberWithComma(parseFloat(String(value)).toFixed(decimalPlaces));
};

export const formatMinTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");
  return `${formattedMinutes}:${formattedSeconds}s`;
};

export const copyTextToClipboard = (text: string) => {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand("copy");
    toast?.success(`Voucher Code "${text}" Copy Successful`);
  } catch (err) {
    toast?.error("Failed to copy voucher code");
  }
  document.body.removeChild(textArea);
};

export function timeAgo(dateString: string): string {
  const now: Date = new Date();
  const date: Date = new Date(dateString);
  const seconds: number = Math.floor((now.getTime() - date.getTime()) / 1000);

  let interval: number = Math.floor(seconds / 31536000);
  if (interval >= 1) {
    return `${interval} year${interval === 1 ? " ago" : "s ago"}`;
  }

  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) {
    return `${interval} month${interval === 1 ? " ago" : "s ago"}`;
  }

  interval = Math.floor(seconds / 86400);
  if (interval >= 1) {
    if (interval === 1) return "yesterday";
    return `${interval} day${interval === 1 ? " ago" : "s ago"}`;
  }

  interval = Math.floor(seconds / 3600);
  if (interval >= 1) {
    return `${interval} hour${interval === 1 ? " ago" : "s ago"}`;
  }

  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
    return `${interval} minute${interval === 1 ? " ago" : "s ago"}`;
  }

  return "just now";
}

export const constructUrl = (link: string) => {
  if (link === "/") return "/";
  const url = lowerCase(link).split(" ");
  return `/sl-dpb/${url[0]}/${link}`;
};

export const getStatusColor = (status: string): string => {
  switch (toLower(status)) {
    case "delivered":
      return "bg-[#E6F8E5] text-[#00812C]";
    case "cancelled":
      return "bg-[#FFD4D4] text-[#FF2A2A]";

    default:
      return "bg-[#FFF2E3] text-[#D67100]";
  }
};

export const getStatusColorReturn = (status: string): string => {
  switch (toLower(status)) {
    case "return successful":
      return "bg-[#DAFDD7] text-[#128C08]";
    case "return unsuccessful":
      return "bg-[#FDE9EB] text-[#EF1432]";
    case "return received":
      return "bg-[#FFF2E3] text-[#D67100]";

    default:
      return "bg-[#F6F6F6] text-[#666666]";
  }
};

export const getPaymentMode = (data: number): string => {
  switch (data) {
    case 0:
      return "Pending";
    case 1:
      return "Cash On Delivery";
    case 2:
      return "BKash";
    case 3:
      return "Nagad";
    case 4:
      return "SSL";
    case 6:
      return "Upay";
    default:
      return "";
  }
};

type TAvailableForReturn = {
  orderDate: string;
  deliveryStatus: string;
  sellerType: number;
};

export const availableForReturn = ({
  deliveryStatus,
  orderDate,
  sellerType,
}: TAvailableForReturn) => {
  const currentDate = new Date();
  const newOrderDate = new Date(orderDate);

  currentDate?.setHours(0, 0, 0, 0);
  newOrderDate?.setHours(0, 0, 0, 0);

  const diffDays = Math.floor(
    (currentDate?.getDate() - newOrderDate?.getTime()) / (1000 * 3600 * 24),
  );

  if (sellerType === 1 && diffDays <= 7 && deliveryStatus === "Delivered") {
    return true;
  }
  if (sellerType === 0 && diffDays <= 14 && deliveryStatus === "Delivered") {
    return true;
  }

  return false;
};

export const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhoneNumber = (phone: string) => {
  const phoneRegex = /^(?:\+?88)?01[3-9]\d{8}$/;
  return phoneRegex.test(phone);
};

export const findReviewType = (review: number) => {
  switch (review) {
    case 1:
      return ReviewType.OneStar;
    case 2:
      return ReviewType.TwoStar;
    case 3:
      return ReviewType.ThreeStar;
    case 4:
      return ReviewType.FourStar;
    default:
      return ReviewType.FiveStar;
  }
};

type TQueryParams = {
  [key: string]: string | number;
};

type TGatewayFetcher = {
  url: string;
  method: "GET" | "POST" | "DELETE" | "PUT";
  headers?: Record<string, string>;
  data?: any;
  params?: TQueryParams;
};

export const gatewayFetcher = async ({
  url,
  method,
  data,
}: TGatewayFetcher) => {
  let secretKey: string = "";

  if (secretKey) {
    const doubleEncrypted = Buffer.from(
      Buffer.from(secretKey).toString("base64"),
    ).toString("base64");

    const headers = {
      Origin: process.env.NEXT_PUBLIC_REQUESTED_ORIGIN,
      sxsrf: doubleEncrypted,
    };

    const fetchOptions: RequestInit = {
      method,
      headers,
      cache: "no-store",
      ...(method === "POST" && data ? { body: JSON.stringify(data) } : {}),
    };

    return fetch(url, fetchOptions);
  }

  const res = await fetch(url, { cache: "no-store" });
  secretKey = res.headers.get("cf-ray-status-id-tn") as string;

  if (res.status === 401 && secretKey !== null) {
    const doubleEncrypted = Buffer.from(
      Buffer.from(secretKey).toString("base64"),
    ).toString("base64");

    const headers = {
      Origin: process.env.NEXT_PUBLIC_REQUESTED_ORIGIN,
      sxsrf: doubleEncrypted,
    };

    const fetchOptions: RequestInit = {
      method,
      headers,
      cache: "no-store",
      ...(method === "POST" && data ? { body: JSON.stringify(data) } : {}),
    };
    return fetch(url, fetchOptions);
  }
  return res;
};

export function getPaginatorClasses() {
  return {
    pageButton: {
      className: "md:min-w-12 md:h-12 min-w-8 h-8",
    },
    firstPageButton: {
      className: "md:min-w-12 md:h-12 min-w-8 h-8",
    },
    prevPageButton: {
      className: "md:min-w-12 md:h-12 min-w-8 h-8",
    },
    nextPageButton: {
      className: "md:min-w-12 md:h-12 min-w-8 h-8",
    },
    lastPageButton: {
      className: "md:min-w-12 md:h-12 min-w-8 h-8",
    },
  };
}

export function getIsMobile() {
  if (window.innerWidth < 768) {
    return true;
  }
  return false;
}

export const gatewayFetcherClient = async ({
  url,
  method,
  headers: headersData,
  data,
  params,
}: TGatewayFetcher) => {
  const queryString = params
    ? `?${new URLSearchParams(params as Record<string, string>).toString()}`
    : "";

  const fullUrl = url + queryString;

  const secretKeyLocal = localStorage.getItem("cf-ray-status-id-tn");

  if (secretKeyLocal) {
    const doubleEncrypted = Buffer.from(
      Buffer.from(secretKeyLocal).toString("base64"),
    ).toString("base64");

    const headers = {
      Origin: process.env.NEXT_PUBLIC_REQUESTED_ORIGIN,
      sxsrf: doubleEncrypted,
      ...headersData,
    };

    const fetchOptions: RequestInit = {
      method,
      headers,
      cache: "no-store",
      ...(method === "POST" || method === "PUT" || (method === "DELETE" && data)
        ? { body: JSON.stringify(data) }
        : {}),
    };

    const res = await fetch(fullUrl, fetchOptions);
    const secretKey = res.headers.get("cf-ray-status-id-tn");

    if (secretKey) {
      localStorage.setItem("cf-ray-status-id-tn", secretKey);
    }

    if (res.status === 401 && secretKey !== null) {
      const doubleEncrypted = Buffer.from(
        Buffer.from(secretKey).toString("base64"),
      ).toString("base64");

      const headers = {
        Origin: process.env.NEXT_PUBLIC_REQUESTED_ORIGIN,
        sxsrf: doubleEncrypted,
      };

      const fetchOptions: RequestInit = {
        method,
        headers,
        cache: "no-store",
        ...(method === "POST" ||
        method === "PUT" ||
        (method === "DELETE" && data)
          ? { body: JSON.stringify(data) }
          : {}),
      };
      return fetch(fullUrl, fetchOptions);
    }
    return res;
  }

  const res = await fetch(fullUrl, { cache: "no-store" });
  const secretKey = res.headers.get("cf-ray-status-id-tn");

  if (secretKey) {
    localStorage.setItem("cf-ray-status-id-tn", secretKey);
  }

  if (res.status === 401 && secretKey !== null) {
    const doubleEncrypted = Buffer.from(
      Buffer.from(secretKey).toString("base64"),
    ).toString("base64");

    const headers = {
      Origin: process.env.NEXT_PUBLIC_REQUESTED_ORIGIN,
      sxsrf: doubleEncrypted,
    };

    const fetchOptions: RequestInit = {
      method,
      headers,
      cache: "no-store",
      ...(method === "POST" || method === "PUT" || (method === "DELETE" && data)
        ? { body: JSON.stringify(data) }
        : {}),
    };
    return fetch(fullUrl, fetchOptions);
  }

  return res;
};
