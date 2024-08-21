export interface MenuItemType {
  id: string;
  title: string;
  href: string;
  icon: React.ReactNode;
}

export interface ProductType {
  id: string;
  name: string;
  description: string;
  price: string;
  quality: number;
  currency: string;
  images?: string[] | any;
  categories: string[];
}

export interface BreadcrumbType{
  id: string;
  name: string;
  href: string;
}
