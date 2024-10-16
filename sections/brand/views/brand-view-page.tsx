import { Breadcrumbs } from '@/components/breadcrumbs';
import { ScrollArea } from '@/components/ui/scroll-area';
import BrandForm from '../brand-form';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Brand', link: '/dashboard/brand' },
  { title: 'Create', link: '/dashboard/brand/create' }
];

export default function BrandViewPage() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-8">
        <Breadcrumbs items={breadcrumbItems} />
        <BrandForm />
      </div>
    </ScrollArea>
  );
}
