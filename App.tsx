import { Product, Order, User } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'REMERA SKATE CORE',
    price: 35000,
    category: 'REMERAS',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800',
    isNew: true,
    colors: ['NEGRO', 'BLANCO'],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: '2',
    name: 'JEAN WIDE LEG',
    price: 45000,
    category: 'PANTALONES',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=800',
    isNew: true,
    colors: ['AZUL', 'NEGRO'],
    sizes: ['32', '34', '36']
  },
  {
    id: '3',
    name: 'BUZO OVERSIZE',
    price: 50000,
    category: 'BUZOS & CAMPERAS',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
    isNew: false,
    colors: ['GRIS', 'NEGRO'],
    sizes: ['L', 'XL', 'XXL']
  },
  {
    id: '4',
    name: 'PANTALÓN CARGO',
    price: 42000,
    category: 'PANTALONES',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=800',
    isNew: false,
    colors: ['NEGRO', 'VERDE'],
    sizes: ['30', '32', '34']
  },
  {
    id: '5',
    name: 'REMERA OVERSIZE GRAFITI',
    price: 38000,
    category: 'REMERAS',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=800',
    isNew: true,
    colors: ['VIOLETA', 'NEGRO'],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: '6',
    name: 'BUZO CON CAPUCHA BLOCK',
    price: 52000,
    category: 'BUZOS & CAMPERAS',
    image: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?auto=format&fit=crop&q=80&w=800',
    isNew: true,
    colors: ['VIOLETA', 'NEGRO'],
    sizes: ['M', 'L', 'XL']
  }
];

export const USER: User = {
  name: 'Lorenzo Etchegaray',
  email: 'lorenzoetchegaray4@gmail.com',
  phone: '+54 9 11 1234 5678',
  memberSince: '13/4/2026'
};

export const ORDERS: Order[] = [
  {
    id: 'ORD-20260414-0001',
    date: '14/4/2026',
    items: "Sudadera Gráfica 'Skate Life' (Negro/L) x1, Pantalón Cargo Oversized (Beige/34) x1",
    status: 'ENTREGADO',
    total: 85
  },
  {
    id: 'ORD-20260403-0002',
    date: '3/4/2026',
    items: "Camiseta Logo 'Street' (Blanco/M) x2",
    status: 'ENTREGADO',
    total: 40
  }
];
