import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  console.log("🚀 ~ ProductCard ~ product:", product)
  return (
    <Link href={`/products/${product?.product_id}`}>
      <div
        className="h-[420px] flex flex-col gap-3 p-3 rounded-xl border border-gray-200"
      >
        <div
          className="object-contain bg-transparent w-full bg-center bg-no-repeat aspect-square bg-cover"
          style={{
            backgroundImage: ` url("${product?.image_url}");`,
            borderRadius: "10px 10px 0px 0px",
          }}
        ></div>
        <div>
          <p className="text-[16px] leading-6 line-clamp-2">{product?.product_name}</p>
          <p className="text-center text-black text-[20px] font-semibold leading-normal mt-3">
            {/* {product?.last_price}{` `}{product?.currency} */}
            ৳ {product?.last_price}
          </p>
          <p className="text-center text-[#60758a] text-sm font-normal leading-normal">
            {/* {product?.last_price}{` `}{product?.currency} */}
            Avg: ৳ {product?.average_price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
