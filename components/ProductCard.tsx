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
    <Link href={`/products/${product?.product_id}`} key={product.product_id}>
      <div
        className="product-card"
      >
        <div
          className="product-card_img w-full bg-center bg-no-repeat aspect-square bg-cover"
          style={{
            backgroundImage: ` url("${product?.image_url}");`,
            borderRadius: "10px 10px 0px 0px",
          }}
        ></div>
        <div>
          <p className="product-title line-clamp-3">{product?.product_name}</p>
          <p className="product-card-price">
            {/* {product?.last_price}{` `}{product?.currency} */}
            ৳ {product?.last_price}
          </p>
          <p className="product-card-avg-price">
            {/* {product?.last_price}{` `}{product?.currency} */}
            Avg: ৳ {product?.average_price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
