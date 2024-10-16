'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { Category } from '@/constants/data';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

export const columns: ColumnDef<Category>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'category_name',
    header: 'Category NAME'
  },
  {
    accessorKey: 'category_slug',
    header: 'Category SLUG'
  },
  {
    accessorKey: 'status_id',
    header: 'Status',
    cell: ({ row }) => {
      return <>{row.original?.status_id === 1 ? 'Active' : 'Inactive'}</>;
    }
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
