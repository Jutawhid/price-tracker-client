import { Breadcrumbs } from '@/components/breadcrumbs';
import { ScrollArea } from '@/components/ui/scroll-area';
import CategoryForm from '../category-form';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Category', link: '/dashboard/category' },
  { title: 'Create', link: '/dashboard/category/create' }
];

export default function CategoryViewPage() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-8">
        <Breadcrumbs items={breadcrumbItems} />
        <CategoryForm />
      </div>
    </ScrollArea>
  );
}
