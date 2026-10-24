export interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  category_id: string;
  category_name: string;
  category_group: string;
  category_image?: string;
  note?: string;
  date: string;
  created_at: string;
}

export interface Budget {
  id: string;
  category_group: string;
  amount: number;
  month: number;
  year: number;
}

export interface CategoryGroup {
  id: string;
  name: string;
  color: string;
  bgColor: string;
  image: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  group: string;
  icon: string;
  color: string;
  image: string;
}

export interface IncomeCategoryItem {
  id: string;
  name: string;
  icon: string;
  color: string;
}
