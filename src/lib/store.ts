import { StoreData, Product, CartItem, UserPreferences } from '../types';

const STORE_KEY = 'lellama_store';

const defaultData: StoreData = {
  products: [
    {
      id: '1',
      name: 'Fresh Atlantic Salmon',
      price: 24.99,
      description: 'Premium cut Atlantic salmon, perfect for grilling or baking.',
      category: 'fish',
      image: 'https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?auto=format&fit=crop&q=80&w=800',
      stock: 15
    },
    {
      id: '2',
      name: 'Jumbo Shrimp',
      price: 19.99,
      description: 'Wild-caught jumbo shrimp, perfect for any seafood dish.',
      category: 'shellfish',
      image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&q=80&w=800',
      stock: 25
    },
    // Add more products as needed
  ],
  cart: [],
  userPreferences: {
    theme: 'light',
    currency: 'USD'
  }
};

export const initializeStore = (): void => {
  if (!localStorage.getItem(STORE_KEY)) {
    localStorage.setItem(STORE_KEY, JSON.stringify(defaultData));
  }
};

export const getStore = (): StoreData => {
  const data = localStorage.getItem(STORE_KEY);
  return data ? JSON.parse(data) : defaultData;
};

export const updateStore = (data: Partial<StoreData>): void => {
  const currentStore = getStore();
  localStorage.setItem(STORE_KEY, JSON.stringify({
    ...currentStore,
    ...data
  }));
};