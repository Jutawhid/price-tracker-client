import ProductCard from '@/components/ProductCard';
import { getAllProducts } from '@/features/api/public-api';
import { ProductList } from '@/types';
import React from 'react';

const RecentTrackProduct = async() => {
  const allProducts = await getAllProducts({ page: 1, size: 10 });
  return (
    <div>
      <h2 className="px-4 pb-3 pt-5 text-[22px] font-bold leading-tight tracking-[-0.015em] text-[#111418]">
        Highlighted Products
      </h2>
      <div className="grid grid-cols-5 gap-2">
        {allProducts?.collection?.map((product: any) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RecentTrackProduct;
