import { Product } from "@/types";
import React from "react";
import { dateFormatWithTime } from "../helper";

type TProps = {
    product: Product;
  };
const ProductHistoryComponent = ({ product }: Readonly<TProps>) => {
  return (
    <div id="price_history" className="my-2 scroll-mt-[90px] md:mt-12">
      <div className="flex flex-col gap-2 md:gap-4">
        <div className="space-y-8 bg-white p-4 shadow md:rounded-lg md:p-3">
          <div className="flex flex-col">
            <div className="flex flex-col gap-2">
              <p className="mb-1 text-base font-bold md:mb-0 md:text-xl md:font-medium">
                Price History
              </p>
              <hr />
              <div className="flex flex-wrap gap-4 px-4 py-6">
                <div className="flex min-w-52 flex-1 flex-col gap-2 rounded-xl border border-[#dbe0e6] p-6">
                  <p className="text-[#111418] text-base font-medium leading-normal">
                    Price over time
                  </p>
                  <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
                    <svg
                      width="100%"
                      height="148"
                      viewBox="-3 0 478 150"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
                        fill="url(#paint0_linear_1131_5935)"
                      ></path>
                      <path
                        d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                        stroke="#60758a"
                        stroke-width="3"
                        stroke-linecap="round"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_1131_5935"
                          x1="236"
                          y1="1"
                          x2="236"
                          y2="149"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#f0f2f5"></stop>
                          <stop
                            offset="1"
                            stop-color="#f0f2f5"
                            stop-opacity="0"
                          ></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="flex justify-around">
                      <p className="text-[#60758a] text-[13px] font-bold leading-normal tracking-[0.015em]">
                        Jan 1
                      </p>
                      <p className="text-[#60758a] text-[13px] font-bold leading-normal tracking-[0.015em]">
                        Feb 1
                      </p>
                      <p className="text-[#60758a] text-[13px] font-bold leading-normal tracking-[0.015em]">
                        Mar 1
                      </p>
                      <p className="text-[#60758a] text-[13px] font-bold leading-normal tracking-[0.015em]">
                        Apr 1
                      </p>
                      <p className="text-[#60758a] text-[13px] font-bold leading-normal tracking-[0.015em]">
                        May 1
                      </p>
                    </div>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Price
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {product?.price?.length > 0 &&
                        product?.price?.map((item, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {item?.price} {` `} {item?.currency}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {dateFormatWithTime(item?.recorded_at)}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHistoryComponent;
