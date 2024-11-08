"use client";

import TruckIcon from "@/../public/assets/truck.svg";
import { numberWithCommas } from "@/features/helper";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type TProps = {
  data: any;
};

export function ProductCard({ data }: Readonly<TProps>) {
  const {
    name,
    discountedPrice,
    price,
    ratings,
    thumbnail,
    slug,
    discountPercentage,
    isBestSeller,
    totalRating,
  } = data;
  console.log(
    "🚀 ~ ProductCard ~ thumbnail:",
    `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/product/200/${thumbnail}`,
  );

  const [fallbackImage, setFallbackImage] = useState<boolean>(false);
  const handleError = () => {
    setFallbackImage(true);
  };

  return (
    <Link href={`/product/${slug}`}>
      <div className="h-full cursor-pointer rounded bg-white">
        <div className="relative flex h-[180px] items-center justify-center">
          {!fallbackImage ? (
            <div className="h-full w-full rounded-[4px] bg-[#F6F6F6] px-0 md:rounded-none md:bg-inherit md:px-0">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/product/200/${thumbnail}`}
                width={180}
                height={180}
                alt="alt"
                className="mx-auto h-full w-full rounded-t-[4px] object-cover sm:object-contain"
                onError={handleError}
              />
            </div>
          ) : (
            <Image
              src="/assets/image/dummy-product.png"
              width={170}
              height={170}
              alt="alt"
              className="mx-auto my-auto w-auto"
            />
          )}
          <div className="absolute left-0 top-0">
            {isBestSeller && (
              <p className="h-[22px] w-[85px] bg-[#801EFE] px-1 text-sm text-white">
                Best Seller
              </p>
            )}
          </div>
        </div>

        <div>
          <div className="mt-[10px] space-y-2 px-2 pb-3">
            <p className="line-clamp-2 text-sm font-semibold text-[#333333]">
              {name}
            </p>
            <div className="text-secondaryText flex flex-col items-start gap-1 text-[10px] xl:flex-row xl:items-center ">
              <p className="text-deepRed text-sm font-semibold ">
                <span className="text-sm text-[#00215B]">
                  ৳ {numberWithCommas(Number(discountedPrice.toFixed(2)))}
                </span>
              </p>
              {discountPercentage === 0 ? null : (
                <p className="pl-0 text-sm font-semibold  text-[#7B7B7B]  xl:pl-2">
                  <span className="text-sm text-[#7B7B7B] line-through">
                    ৳ {numberWithCommas(price)}
                  </span>{" "}
                  <span className="text-sm text-[#EC008C]">
                    (-{discountPercentage}%)
                  </span>
                </p>
              )}
            </div>
            {totalRating !== 0 ? (
              <div className="flex items-center justify-start text-sm font-medium text-[#7B7B7B]">
                {/* <Ratings
                  ratings={ratings}
                  totalRating={totalRating}
                /> */}
                <Image
                  src="/new/review-star-icon.svg"
                  alt="review-star"
                  height={16}
                  width={16}
                ></Image>
                <p className="px-[1px]">{ratings.toFixed(1)}</p>
                <p>{`(${totalRating})`}</p>
              </div>
            ) : null}
            {data?.isFreeShippingApplied ? (
              <div className="my-[10px] flex h-[24px] w-[100px] items-center justify-center gap-[7px] rounded border border-[#00ACD4] text-[10px] font-semibold text-[#00ACD4]">
                <Image
                  src={TruckIcon}
                  alt="alt"
                />{" "}
                <p>Free Delivery</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Link>
  );
}
