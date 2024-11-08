import Modal from "@/components/Modal";
import PriceInfoCard from "@/components/PriceInfoCard";
import ProductCard from "@/components/ProductCard";
import { Ratings } from "@/components/ui/product";
import { dateFormatWithTime } from "@/features/helper";
import { ProductSpecification } from "@/features/product-details/product-information-specification";
import { getProductById, getSimilarProducts } from "@/lib/actions";
import { formatNumber } from "@/lib/utils";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

type Props = {
  params: { id: string };
};

const ProductDetails = async ({ params: { id } }: Props) => {
  const product: Product = await getProductById(Number(id));

  if (!product) redirect("/");

  // const similarProducts = await getSimilarProducts(id);
  const tabMenu = [
    { id: 0, label: "Product Details", link: "details" },
    { id: 1, label: "Price History", link: "price_history" },
    { id: 2, label: "Price Alart", link: "alart" },
    { id: 3, label: "Similar Products", link: "similar_products" },
  ];
  return (
    <div className="product-container !py-2">
      <div className="grid grid-flow-row grid-cols-12 gap-2 rounded-none bg-white p-4 shadow sm:gap-10 md:rounded-lg lg:grid-flow-col">
        <div className="col-span-12 lg:col-span-5">
          <div className="product-image">
            <Image
              src={product?.image_url}
              alt={product?.product_name}
              width={1580}
              height={1400}
              className="m-auto"
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <div className="flex justify-between items-start gap-5 flex-wrap pb-6">
            <div className="flex flex-col gap-3">
              <p className="text-[20px] text-secondary font-semibold">
                {product.product_name}
              </p>

              <Link
                href={`/categories/${product.category_id}`}
                target="_blank"
                className="text-base text-black opacity-50"
              >
                {product.category_name}
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <div className="product-hearts">
                <Image
                  src="/assets/icons/red-heart.svg"
                  alt="heart"
                  width={20}
                  height={20}
                />

                <p className="text-base font-semibold text-[#D46F77]">
                  {product.rating}
                </p>
              </div>

              <div className="p-2 bg-white-200 rounded-10">
                <Image
                  src="/assets/icons/bookmark.svg"
                  alt="bookmark"
                  width={20}
                  height={20}
                />
              </div>

              <div className="p-2 bg-white-200 rounded-10">
                <Image
                  src="/assets/icons/share.svg"
                  alt="share"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>

          <div className="product-info">
            <div className="flex flex-col gap-2">
              <p className="text-[34px] text-secondary font-bold">
                {product.currency} {formatNumber(product.currentPrice)}
              </p>
              <p className="text-[21px] text-black opacity-50 line-through">
                {product.currency} {formatNumber(product.originalPrice)}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <div className="product-stars">
                  <Image
                    src="/assets/icons/star.svg"
                    alt="star"
                    width={16}
                    height={16}
                  />
                  <p className="text-sm text-primary-orange font-semibold">
                    {product.rating || "25"}
                  </p>
                </div>

                <div className="product-reviews">
                  <Image
                    src="/assets/icons/comment.svg"
                    alt="comment"
                    width={16}
                    height={16}
                  />
                  <p className="text-sm text-secondary font-semibold">
                    {product.rating} Reviews
                  </p>
                </div>
              </div>

              <p className="text-sm text-black opacity-50">
                <span className="text-primary-green font-semibold">93% </span>{" "}
                of buyers have recommeded this.
              </p>
            </div>
          </div>

          <div className="my-7 flex flex-col gap-5">
            <div className="flex gap-5 flex-wrap">
              <PriceInfoCard
                title="Current Price"
                iconSrc="/assets/icons/price-tag.svg"
                // value={`${product.currency} ${formatNumber(product.currentPrice)}`}
                value={`${product.currency} ${formatNumber(
                  product?.currentPrice
                )}`}
              />
              <PriceInfoCard
                title="Average Price"
                iconSrc="/assets/icons/chart.svg"
                value={`${product.currency} ${formatNumber(
                  product?.averagePrice
                )}`}
              />
              <PriceInfoCard
                title="Highest Price"
                iconSrc="/assets/icons/arrow-up.svg"
                value={`${product.currency} ${formatNumber(
                  product?.highestPrice
                )}`}
              />
              <PriceInfoCard
                title="Lowest Price"
                iconSrc="/assets/icons/arrow-down.svg"
                value={`${product.currency} ${formatNumber(
                  product?.lowestPrice
                )}`}
              />
            </div>
          </div>

          {/* <Modal productId={id} /> */}
        </div>
      </div>

      {/*  */}

      <div className="bg-[#F9F9F9] md:bg-transparent">
        <div className="mb-2 flex flex-wrap items-center gap-2 bg-[#fff] p-4 shadow md:my-0 md:flex-nowrap md:bg-transparent md:p-0 md:shadow-none">
          {tabMenu?.map((item, index) => (
            <Link
              key={index}
              href={`#${item?.link}`}
              className="rounded-sm bg-white px-4 py-2 font-semibold text-[#999999] shadow-sm duration-500 hover:bg-[#00215b] hover:text-white sm:text-lg md:text-inherit"
            >
              {item?.label}
            </Link>
          ))}
        </div>
        <div id="details" className="scroll-mt-[90px] md:mt-5">
          <ProductSpecification product={product} />
        </div>

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

        <div id="alart" className="scroll-mt-[90px] md:mt-5">
          Question
        </div>
      </div>

      {/* {similarProducts && similarProducts?.length > 0 && (
        <div className="py-14 flex flex-col gap-2 w-full">
          <p className="section-text">Similar Products</p>

          <div className="flex flex-wrap gap-10 mt-7 w-full">
            {similarProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      )} */}
    </div>
  );
};

export default ProductDetails;
