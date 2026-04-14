export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  isNew?: boolean;
  colors?: string[];
  sizes?: string[];
}

export interface Order {
  id: string;
  date: string;
  items: string;
  status: 'ENTREGADO' | 'PENDIENTE' | 'CANCELADO';
  total: number;
}

export interface User {
  name: string;
  email: string;
  phone: string;
  memberSince: string;
}
