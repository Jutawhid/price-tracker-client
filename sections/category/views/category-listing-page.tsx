import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import CategoryTable from '../category-tables';
import { buttonVariants } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { searchParamsCache } from '@/lib/searchparams';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { Api } from '@/app/api/endpoint';
import axios from 'axios';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Category', link: '/dashboard/category' }
];

type TCategoryListingPage = {};

async function getCategoryListData({ page = 1, pageLimit = 10 }: any) {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}${Api.CategoriesList}?page=${page}&limit=${pageLimit}`;
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

export default async function CategoryListingPage({}: TCategoryListingPage) {
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
 
  const category = await getCategoryListData({ page, pageLimit });
  const totalUsers = category?.data?.totalDocuments;

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Category (${totalUsers})`}
            description="Manage categorys (Server side table functionalities.)"
          />

          <Link
            href={'/dashboard/category/new'}
            className={cn(buttonVariants({ variant: 'default' }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />
        <CategoryTable data={category?.data?.results} totalData={totalUsers} />
      </div>
    </PageContainer>
  );
}
