'use client';

import { useEffect, useState } from 'react';
import { DataTable } from '@/components/ui/table/data-table';
import { DataTableFilterBox } from '@/components/ui/table/data-table-filter-box';
import { DataTableResetFilter } from '@/components/ui/table/data-table-reset-filter';
import { DataTableSearch } from '@/components/ui/table/data-table-search';
import { Product } from '@/constants/data';
import {
  CATEGORY_OPTIONS,
  useProductTableFilters
} from './use-product-table-filters';
import { columns } from './columns';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Api } from '@/app/api/endpoint';``

export default function ProductTable() {
  const [product, setProducts] = useState<Product[]>([]);
  console.log("🚀 ~ ProductTable ~ data:", product)
  const [totalData, setTotalProducts] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const fetchProductListData = async () => {
    try {
      // Get session to retrieve token on the client side
      const token = Cookies.get('authjs.session-token');
      console.log("🚀 ~ fetchProductListData ~ token:", token)

      if (!token) {
        throw new Error('User not authenticated');
      }

      const url = `${process.env.NEXT_PUBLIC_API_URL}${Api.ProductsListAdmin}?page=1&limit=10`;

      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log("🚀 ~ fetchProductListData ~ res:", res)

      // Set the products and total count from the response
      setProducts(res.data.products);
      setTotalProducts(res.data.total_products);
    } catch (error: any) {
      setError(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };
  // Fetch product data on component mount
  useEffect(() => {
    fetchProductListData();
  }, []);
  const {
    categoriesFilter,
    setCategoriesFilter,
    isAnyFilterActive,
    resetFilters,
    searchQuery,
    setPage,
    setSearchQuery
  } = useProductTableFilters();

  return (
    <div className="space-y-4 ">
      <div className="flex flex-wrap items-center gap-4">
        <DataTableSearch
          searchKey="name"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setPage={setPage}
        />
        <DataTableFilterBox
          filterKey="categories"
          title="Categories"
          options={CATEGORY_OPTIONS}
          setFilterValue={setCategoriesFilter}
          filterValue={categoriesFilter}
        />
        <DataTableResetFilter
          isFilterActive={isAnyFilterActive}
          onReset={resetFilters}
        />
      </div>
      <DataTable columns={columns} data={product} totalItems={totalData} />
    </div>
  );
}
