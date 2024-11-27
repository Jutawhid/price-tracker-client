"use client";

import ProductCard from "@/components/ProductCard";
import { Category, ProductList } from "@/types";
import { Dropdown } from "primereact/dropdown";
import React from "react";

const PopularProducts = ({ allProducts, allCategories }: ProductList) => {
 console.log("🚀 ~ PopularProducts ~ allCategories:", allCategories)
 
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  return (
    <div>
      <div className="flex justify-between my-5 py-5">
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Popular Products
        </h2>
        <Dropdown
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.value)}
          options={allCategories?.map((item: Category) => ({
            name: item?.category_name,
            code: item?.id,
          }))}
          optionLabel="name"
          placeholder="Select a category"
          className="w-[10rem] md:w-4rem h-[40px]"
        />
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
        {allProducts?.collection?.map((product: any) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
