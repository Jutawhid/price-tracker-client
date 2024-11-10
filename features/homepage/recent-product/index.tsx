import ProductCard from "@/components/ProductCard";
import { ProductList } from "@/types";
import React from "react";

function RecentTrackProduct({allProducts}: ProductList) {
  return (
    <div>
      <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Recently Tracked Products
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
        {allProducts?.collection?.map((product: any) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default RecentTrackProduct;
