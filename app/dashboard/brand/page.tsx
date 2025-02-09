import { searchParamsCache } from '@/lib/searchparams';
import { BrandListingPage } from '@/sections/brand/views';
import { SearchParams } from 'nuqs/parsers';
import React from 'react';

type pageProps = {
  searchParams: SearchParams;
};

export const metadata = {
  title: 'Dashboard : Brands'
};

export default async function Page({ searchParams }: pageProps) {
  // Allow nested RSCs to access the search params (in a type-safe way)
  searchParamsCache.parse(searchParams);

  return <BrandListingPage />;
}
