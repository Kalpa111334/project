export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  stock: number;
}

export interface CartItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface UserPreferences {
  theme: string;
  currency: string;
}

export interface StoreData {
  products: Product[];
  cart: CartItem[];
  userPreferences: UserPreferences;
}