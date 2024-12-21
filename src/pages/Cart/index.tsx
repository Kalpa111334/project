import React from 'react';
import { getStore, updateStore } from '../../lib/store';
import CartItem from './CartItem';

export default function Cart() {
  const store = getStore();
  const cartWithProducts = store.cart.map(item => ({
    ...item,
    product: store.products.find(p => p.id === item.productId)!
  }));

  const subtotal = cartWithProducts.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    const updatedCart = store.cart.map(item =>
      item.productId === productId ? { ...item, quantity } : item
    );
    updateStore({ cart: updatedCart });
  };

  const handleRemoveItem = (productId: string) => {
    const updatedCart = store.cart.filter(item => item.productId !== productId);
    updateStore({ cart: updatedCart });
  };

  if (cartWithProducts.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Add some delicious seafood to get started!</p>
        <a
          href="/products"
          className="inline-block px-6 py-3 bg-[#1B4965] text-white rounded-lg hover:bg-[#1B4965]/90 transition-colors"
        >
          Browse Products
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cartWithProducts.map(({ product, quantity }) => (
            <CartItem
              key={product.id}
              product={product}
              quantity={quantity}
              onUpdateQuantity={handleUpdateQuantity}
              onRemove={handleRemoveItem}
            />
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg shadow h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (8%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg pt-2 border-t">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <button className="w-full py-3 bg-[#1B4965] text-white rounded-lg hover:bg-[#1B4965]/90 transition-colors">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}