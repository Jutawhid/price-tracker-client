import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/products/${product?.id}`} key={product.id}>
      <div
        key={product?.id}
        className="flex flex-col gap-3 p-3 rounded-xl border border-gray-200"
      >
        <div
          className="w-full bg-center bg-no-repeat aspect-square bg-cover"
          style={{
            backgroundImage: ` url("${product?.image_url}");`,
            borderRadius: "10px 10px 0px 0px",
          }}
        ></div>
        <div>
          <p className="product-title">{product?.product_name}</p>
          <p className="text-[#60758a] text-sm font-normal leading-normal">
            {/* {product?.currentPrice}{` `}{product?.currency} */}
            $39.99
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
