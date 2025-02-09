"use client";

import RefreshIcon from "@/public/assets/icons/refresh-icon.svg";
import { Product } from "@/types";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type TProps = {
  product: Product;
};

export function ProductSpecification({ product }: Readonly<TProps>) {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [currentHeight, setCurrentHeight] = useState<number>(0);

  const highlightRef = useRef<HTMLDivElement>(null);
  const specificationRef = useRef<HTMLDivElement>(null);
  const initialHeight: number = 414;

  useEffect(() => {
    const contentHeight = highlightRef.current?.scrollHeight;
    if (Number(contentHeight) < initialHeight) {
      setCurrentHeight(Number(contentHeight));
      setShowMore(true);
    } else {
      setCurrentHeight(initialHeight);
    }
  }, []);

  useEffect(() => {
    const contentHeight = highlightRef.current?.scrollHeight;
    if (!showMore && Number(contentHeight) >= initialHeight) {
      setCurrentHeight(initialHeight);
    } else {
      setCurrentHeight(Number(contentHeight));
    }
  }, [showMore]);

  const handleShowMoreToggle = () => {
    setShowMore((prev) => !prev);

    if (showMore && specificationRef.current) {
      specificationRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div ref={specificationRef} className="">
      {product?.product_description ? (
        <div className="relative scroll-mt-[90px] bg-white p-5 pb-12 shadow  md:mt-5 md:rounded-lg">
          <div
            ref={highlightRef}
            className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
            style={{
              maxHeight: showMore
                ? `${highlightRef.current?.scrollHeight}px`
                : `${initialHeight}px`,
            }}
          >
            <p className="mb-5 font-bold md:text-xl md:font-medium p-3">
              Specifications
            </p>
            <div className="!h-[500px] w-full bg-[#F6F6F6]">
              <div className="float-none mb-6 mr-6 w-full lg:float-start">
                {JSON.parse(product.product_description) &&
                  Object.entries(JSON.parse(product.product_description)).map(
                    ([key, value]: any, index) => (
                      <div className="w-full" key={index}>
                        <div
                          className={`grid grid-cols-2 gap-4 p-4 text-sm font-medium md:gap-2 md:p-3  ${
                            Number(index) % 2 === 0 ? "bg-[#F6F6F6]" : ""
                          }`}
                        >
                          <p className=" text-[#999999]">{key}</p>
                          <p className="">{value}</p>
                        </div>
                      </div>
                    )
                  )}
              </div>
              <div className="clear-both"></div>
            </div>
          </div>
          {!showMore && (
            <div className="absolute  bottom-12 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
          )}
          {currentHeight >= initialHeight && (
            <div className="absolute bottom-4 flex w-full justify-center">
              <button
                className="flex cursor-pointer items-center justify-center rounded-lg px-4 py-3 text-center  text-xs font-semibold text-link transition duration-1000 ease-in-out "
                onClick={handleShowMoreToggle}
              >
                <p className="mr-2">
                  {showMore ? "Show Less " : "Show More "}
                </p>
                <Image src={RefreshIcon} alt="" sizes="15" />
              </button>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
