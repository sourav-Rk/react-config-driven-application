export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: string;
  category: string;
}

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Laptop Pro',
    description: 'High-performance laptop for professionals',
    price: 1299.99,
    category: 'Electronics',
    image: '/pexels-shvetsa-12662908.jpg',
  },
  {
    id: 2,
    name: 'Wireless Mouse',
    description: 'Ergonomic wireless mouse with long battery life',
    price: 29.99,
    category: 'Accessories',
    image: '/mouse.avif',
  },
  {
    id: 3,
    name: 'Mechanical Keyboard',
    description: 'RGB mechanical keyboard with cherry switches',
    price: 149.99,
    category: 'Accessories',
    image: '/keyboard.jpg',
  },
  {
    id: 4,
    name: 'Monitor 27"',
    description: '4K ultra-wide monitor with HDR support',
    price: 599.99,
    category: 'Electronics',
    image: '/monitor.jpg',
  },
  {
    id: 5,
    name: 'USB-C Hub',
    description: 'Multi-port USB-C hub with HDMI and SD card reader',
    price: 49.99,
    category: 'Accessories',
    image: 'https://picsum.photos/seed/hub/600/400',
  },
  {
    id: 6,
    name: 'Standing Desk',
    description: 'Adjustable height standing desk for home office',
    price: 399.99,
    category: 'Furniture',
    image: 'https://picsum.photos/seed/desk/600/400',
  },
];

