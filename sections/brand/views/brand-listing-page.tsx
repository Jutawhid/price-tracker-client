import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import BrandTable from '../brand-tables';
import { buttonVariants } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Employee } from '@/constants/data';
import { fakeUsers } from '@/constants/mock-api';
import { searchParamsCache } from '@/lib/searchparams';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { Api } from '@/app/api/endpoint';
import axios from 'axios';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Brand', link: '/dashboard/brand' }
];

type TBrandListingPage = {};

async function getBrandListData({ page = 1,
  limit = 10,
  categories,
  search }: any) {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}${Api.BrandListAdmin}?page=${page}&limit=${limit}`;
    const res = await axios.get(url);
    return {
      data: res?.data as any,
      error: null,
    };
  } catch (error: any) {
    return {
      data: error.data as any,
      error,
    };
  }
}

export default async function BrandListingPage({}: TBrandListingPage) {
  // Showcasing the use of search params cache in nested RSCs
  const page = searchParamsCache.get('page');
  const search = searchParamsCache.get('q');
  const gender = searchParamsCache.get('gender');
  const pageLimit = searchParamsCache.get('limit');

  const filters = {
    page,
    limit: pageLimit,
    ...(search && { search }),
    ...(gender && { genders: gender })
  };

  // mock api call
  // const data = await fakeUsers.getUsers(filters);
 
  const brand = await getBrandListData(filters);
  const totalUsers = brand?.data?.totalDocuments;

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Brand (${totalUsers})`}
            description="Manage brands (Server side table functionalities.)"
          />

          <Link
            href={'/dashboard/brand/new'}
            className={cn(buttonVariants({ variant: 'default' }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />
        <BrandTable data={brand?.data?.results} totalData={totalUsers} />
      </div>
    </PageContainer>
  );
}
