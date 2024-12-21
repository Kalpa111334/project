export type Category = 'Premium Fish' | 'Shellfish' | 'Crustaceans' | 'Mollusks' | 'Specialty Items';

export interface SeafoodProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  origin: string;
  inStock: boolean;
  freshness?: string;
  preparation?: string;
  imageAlt?: string;
}

export const categories: Category[] = [
  'Premium Fish',
  'Shellfish',
  'Crustaceans',
  'Mollusks',
  'Specialty Items'
];

export const seafoodProducts: SeafoodProduct[] = [
  {
    id: '1',
    name: 'Fresh Atlantic Salmon',
    description: 'Premium quality Atlantic salmon, perfect for sashimi or grilling',
    price: 3500.00,
    category: 'Premium Fish',
    image: 'https://images.pexels.com/photos/3843224/pexels-photo-3843224.jpeg',
    origin: 'Norway',
    inStock: true
  },
  {
    id: '2',
    name: 'Jumbo Tiger Prawns',
    description: 'Large, succulent tiger prawns, ideal for grilling or curry',
    price: 2800.00,
    category: 'Crustaceans',
    image: 'https://images.pexels.com/photos/3843224/pexels-photo-3843224.jpeg',
    origin: 'Sri Lanka',
    inStock: true
  },
  {
    id: '3',
    name: 'Blue Swimmer Crab',
    description: 'Fresh blue swimmer crabs, perfect for curry or chili crab',
    price: 1800.00,
    category: 'Crustaceans',
    image: 'https://images.pexels.com/photos/2827263/pexels-photo-2827263.jpeg',
    origin: 'Sri Lanka',
    inStock: true
  },
  {
    id: '4',
    name: 'Fresh Tuna Steak',
    description: 'Premium yellowfin tuna steaks, perfect for grilling',
    price: 2200.00,
    category: 'Premium Fish',
    image: 'https://images.pexels.com/photos/3843224/pexels-photo-3843224.jpeg',
    origin: 'Maldives',
    inStock: true
  },
  {
    id: '5',
    name: 'Local Spiny Lobster',
    description: 'Fresh local spiny lobster, ideal for grilling or thermidor',
    price: 4500.00,
    category: 'Crustaceans',
    image: 'https://images.pexels.com/photos/2827263/pexels-photo-2827263.jpeg',
    origin: 'Sri Lanka',
    inStock: true
  },
  {
    id: '6',
    name: 'Fresh Modha Fish',
    description: 'Local favorite white fish, perfect for curry or frying',
    price: 1600.00,
    category: 'Premium Fish',
    image: 'https://images.pexels.com/photos/3843224/pexels-photo-3843224.jpeg',
    origin: 'Sri Lanka',
    inStock: true
  },
  {
    id: '7',
    name: 'Cuttle Fish',
    description: 'Fresh cuttlefish, great for curry or stir-fry',
    price: 1900.00,
    category: 'Mollusks',
    image: 'https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg',
    origin: 'Sri Lanka',
    inStock: true
  },
  {
    id: '8',
    name: 'Fresh Seer Fish',
    description: 'Premium seer fish steaks, perfect for grilling or curry',
    price: 2800.00,
    category: 'Premium Fish',
    image: 'https://images.pexels.com/photos/3843224/pexels-photo-3843224.jpeg',
    origin: 'Sri Lanka',
    inStock: true
  }
];
