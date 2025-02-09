import { Icons } from '@/components/icons';

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
  children?: NavItem[];
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;

export type PriceHistoryItem = {
  price: number;
  recorded_at: Date;
  currency: string;
};

export type User = {
  email: string;
};

export type Category = {
  id: number | undefined;
  category_name: string;
}
export type Product = {
  highest_price: number;
  lowest_price: number;
  product_id: number;
  total_sold: number | undefined;
  category_name: string;
  brand_name: string;
  rating: number;
  product_description: any;
  id?: string;
  category_id?: number;
  product_url: string;
  currency: string;
  image_url: string;
  product_name: string;
  currentPrice: number;
  originalPrice: number;
  price: PriceHistoryItem[] | [];
  last_price: number;
  average_price: number;
  highestPrice: number;
  lowestPrice: number;
  averagePrice: number;
  discountRate: number;
  description: string;
  category: string;
  reviewsCount: number;
  stars: number;
  isOutOfStock: Boolean;
  users?: User[];
};

export type ProductList = {
  allProducts: {
    collection: Product[]
  },
  allCategories: Category[]
  
};

export type NotificationType =
  | "WELCOME"
  | "CHANGE_OF_STOCK"
  | "LOWEST_PRICE"
  | "THRESHOLD_MET";

export type EmailContent = {
  subject: string;
  body: string;
};

export type EmailProductInfo = {
  title: string;
  url: string;
};

