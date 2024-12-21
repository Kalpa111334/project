import React, { useState } from 'react';
import { getStore, updateStore } from '../../lib/store';
import ProductCard from './ProductCard';
import ProductFilters from './ProductFilters';
import { Product } from '../../types';

export default function Products() {
  const { products } = getStore();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const handleSearch = (query: string) => {
    const filtered = products.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleCategoryChange = (category: string) => {
    if (!category) {
      setFilteredProducts(products);
      return;
    }
    const filtered = products.filter(product => product.category === category);
    setFilteredProducts(filtered);
  };

  const handleSortChange = (sort: string) => {
    const sorted = [...filteredProducts].sort((a, b) => {
      switch (sort) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
    setFilteredProducts(sorted);
  };

  const handleAddToCart = (productId: string) => {
    const store = getStore();
    const product = store.products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = store.cart.find(item => item.productId === productId);
    if (existingItem) {
      const updatedCart = store.cart.map(item =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      updateStore({ cart: updatedCart });
    } else {
      updateStore({
        cart: [...store.cart, { productId, quantity: 1, price: product.price }]
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <ProductFilters
        onSearch={handleSearch}
        onCategoryChange={handleCategoryChange}
        onSortChange={handleSortChange}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}