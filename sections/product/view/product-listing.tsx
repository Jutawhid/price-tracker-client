import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import ProductTable from '../product-tables';
import { buttonVariants } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Product } from '@/constants/data';
import { fakeProducts } from '@/constants/mock-api';
import { searchParamsCache } from '@/lib/searchparams';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import type { SearchParams } from 'nuqs/server';
import axios from 'axios';
import { Api } from '@/app/api/endpoint';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Products', link: '/dashboard/product' }
];

type ProductListingPage = {};

async function getProductListData({
  page = 1,
  limit = 10,
  categories,
  search
}: any) {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}${Api.ProductsListAdmin}?page=${page}&limit=${limit}`;
    const res = await axios.get(url);
    console.log('🚀 ~ res:', res);
    return {
      data: res?.data as any,
      error: null
    };
  } catch (error: any) {
    return {
      data: error.data as any,
      error
    };
  }
}

export default async function ProductListingPage({}: ProductListingPage) {
  // Showcasing the use of search params cache in nested RSCs
  const page = searchParamsCache.get('page');
  const search = searchParamsCache.get('q');
  const pageLimit = searchParamsCache.get('limit');
  const categories = searchParamsCache.get('categories');

  const filters = {
    page,
    limit: pageLimit,
    ...(search && { search }),
    ...(categories && { categories: categories })
  };
  const product = await getProductListData(filters);
  console.log('🚀 ~ ProductListingPage ~ data:', product);

  const data = await fakeProducts.getProducts(filters);
  const totalProducts = data.total_products;
  const products: Product[] = data.products;

  return (
    <PageContainer>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="flex items-start justify-between">
          <Heading
            title={`Products (${totalProducts})`}
            description="Manage products (Server side table functionalities.)"
          />
          <Link
            href={'/dashboard/product/new'}
            className={cn(buttonVariants(), 'text-xs md:text-sm')}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />
        <ProductTable data={products} totalData={totalProducts} />
      </div>
    </PageContainer>
  );
}
